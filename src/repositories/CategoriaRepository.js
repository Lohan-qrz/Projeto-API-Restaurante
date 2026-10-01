import { Categoria } from '../models/index.js';
import { BaseRepository } from './BaseRepository.js';

export const categoriaRepository = new BaseRepository(Categoria);
