import { BaseService } from './BaseService.js';
import {
  clienteFindOptions,
  clienteRepository,
} from '../repositories/ClienteRepository.js';
import { enderecoRepository } from '../repositories/EnderecoRepository.js';
import { assertExists, requireFields } from '../utils/validation.js';

const validateCliente = async (data, partial = false) => {
  if (!partial) requireFields(data, ['nome', 'telefone']);
  if (data.endereco_id !== undefined && data.endereco_id !== null) {
    await assertExists(enderecoRepository, data.endereco_id, 'Endereço');
  }
};

export const clienteService = new BaseService(clienteRepository, {
  resourceName: 'Cliente',
  findOptions: clienteFindOptions,
  validateCreate: (data) => validateCliente(data),
  validateUpdate: (data) => validateCliente(data, true),
});
