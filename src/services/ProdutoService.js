import { BaseService } from './BaseService.js';
import {
  produtoFindOptions,
  produtoRepository,
} from '../repositories/ProdutoRepository.js';
import { categoriaRepository } from '../repositories/CategoriaRepository.js';
import {
  assertExists,
  assertPositive,
  requireFields,
} from '../utils/validation.js';

const validateProduto = async (data, partial = false) => {
  if (!partial) requireFields(data, ['nome', 'preco', 'categoria_id']);
  if (data.preco !== undefined) assertPositive(data.preco, 'preco');
  if (data.categoria_id !== undefined) {
    await assertExists(categoriaRepository, data.categoria_id, 'Categoria');
  }
};

export const produtoService = new BaseService(produtoRepository, {
  resourceName: 'Produto',
  findOptions: produtoFindOptions,
  validateCreate: (data) => validateProduto(data),
  validateUpdate: (data) => validateProduto(data, true),
});
