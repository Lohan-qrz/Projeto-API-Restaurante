import { AppError } from '../utils/AppError.js';
import { comandaItemRepository } from '../repositories/ComandaItemRepository.js';
import { comandaRepository } from '../repositories/ComandaRepository.js';
import { produtoRepository } from '../repositories/ProdutoRepository.js';
import {
  assertExists,
  assertPositive,
  requireFields,
} from '../utils/validation.js';

const validateComandaItem = async (data, comandaId, partial = false) => {
  await assertExists(comandaRepository, comandaId, 'Comanda');
  if (!partial)
    requireFields(data, ['quantidade', 'preco_unitario', 'produto_id']);
  if (data.quantidade !== undefined)
    assertPositive(data.quantidade, 'quantidade');
  if (data.preco_unitario !== undefined)
    assertPositive(data.preco_unitario, 'preco_unitario');
  if (data.produto_id !== undefined)
    await assertExists(produtoRepository, data.produto_id, 'Produto');
};

export const comandaItemService = {
  async list(params) {
    const comandaId = Number(params.id);
    await assertExists(comandaRepository, comandaId, 'Comanda');
    return comandaItemRepository.findByComanda(comandaId);
  },

  async findById(itemId, params) {
    const comandaId = Number(params.id);
    const item = await comandaItemRepository.findByComandaAndItem(
      comandaId,
      itemId
    );
    if (!item) throw new AppError('Item não encontrado', 404);
    return item;
  },

  async create(data, params) {
    const comandaId = Number(params.id);
    await validateComandaItem(data, comandaId);
    return comandaItemRepository.create({
      ...data,
      comanda_id: comandaId,
      observacao: data.observacao || '',
    });
  },

  async update(itemId, data, params) {
    const comandaId = Number(params.id);
    await this.findById(itemId, params);
    await validateComandaItem(data, comandaId, true);
    return comandaItemRepository.updateByComandaAndItem(
      comandaId,
      itemId,
      data
    );
  },

  async delete(itemId, params) {
    const comandaId = Number(params.id);
    const item = await comandaItemRepository.deleteByComandaAndItem(
      comandaId,
      itemId
    );
    if (!item) throw new AppError('Item não encontrado', 404);
    return item;
  },
};
