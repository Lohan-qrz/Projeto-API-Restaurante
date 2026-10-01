import { BaseService } from './BaseService.js';
import { enderecoRepository } from '../repositories/EnderecoRepository.js';
import { requireFields } from '../utils/validation.js';

export const enderecoService = new BaseService(enderecoRepository, {
  resourceName: 'Endereço',
  validateCreate: (data) => requireFields(data, ['bairro', 'rua', 'numero']),
});
