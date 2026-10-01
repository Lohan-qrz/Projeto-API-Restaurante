import { AppError } from '../utils/AppError.js';
import { pedidoItemRepository } from '../repositories/PedidoItemRepository.js';
import { pedidoRepository } from '../repositories/PedidoRepository.js';
import { produtoRepository } from '../repositories/ProdutoRepository.js';
import {
  assertExists,
  assertPositive,
  requireFields,
} from '../utils/validation.js';

const validatePedidoItem = async (data, pedidoId, partial = false) => {
  await assertExists(pedidoRepository, pedidoId, 'Pedido');
  if (!partial)
    requireFields(data, ['quantidade', 'preco_unitario', 'produto_id']);
  if (data.quantidade !== undefined)
    assertPositive(data.quantidade, 'quantidade');
  if (data.preco_unitario !== undefined)
    assertPositive(data.preco_unitario, 'preco_unitario');
  if (data.produto_id !== undefined)
    await assertExists(produtoRepository, data.produto_id, 'Produto');
};

export const pedidoItemService = {
  async list(params) {
    const pedidoId = Number(params.id);
    await assertExists(pedidoRepository, pedidoId, 'Pedido');
    return pedidoItemRepository.findByPedido(pedidoId);
  },

  async findById(itemId, params) {
    const pedidoId = Number(params.id);
    const item = await pedidoItemRepository.findByPedidoAndItem(
      pedidoId,
      itemId
    );
    if (!item) throw new AppError('Item não encontrado', 404);
    return item;
  },

  async create(data, params) {
    const pedidoId = Number(params.id);
    await validatePedidoItem(data, pedidoId);
    return pedidoItemRepository.create({
      ...data,
      pedido_id: pedidoId,
      observacao: data.observacao || '',
    });
  },

  async update(itemId, data, params) {
    const pedidoId = Number(params.id);
    await this.findById(itemId, params);
    await validatePedidoItem(data, pedidoId, true);
    return pedidoItemRepository.updateByPedidoAndItem(pedidoId, itemId, data);
  },

  async delete(itemId, params) {
    const pedidoId = Number(params.id);
    const item = await pedidoItemRepository.deleteByPedidoAndItem(
      pedidoId,
      itemId
    );
    if (!item) throw new AppError('Item não encontrado', 404);
    return item;
  },
};
