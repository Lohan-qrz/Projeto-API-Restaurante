import { BaseService } from './BaseService.js';
import { categoriaRepository } from '../repositories/CategoriaRepository.js';
import { requireFields } from '../utils/validation.js';

export const categoriaService = new BaseService(categoriaRepository, {
  resourceName: 'Categoria',
  validateCreate: (data) => requireFields(data, ['nome']),
});
