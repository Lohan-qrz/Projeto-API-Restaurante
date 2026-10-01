import { Produto, Categoria } from '../models/index.js';
import { BaseRepository } from './BaseRepository.js';

export const produtoRepository = new BaseRepository(Produto);

export const produtoFindOptions = {
  include: [{ model: Categoria, as: 'categoria' }],
};
