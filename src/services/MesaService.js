import { BaseService } from './BaseService.js';
import { mesaRepository } from '../repositories/MesaRepository.js';
import { assertIn, requireFields } from '../utils/validation.js';

const statusMesa = ['LIVRE', 'OCUPADA', 'PENDENTE', 'PAGO'];

export const mesaService = new BaseService(mesaRepository, {
  resourceName: 'Mesa',
  validateCreate: (data) => {
    requireFields(data, ['numero', 'status']);
    assertIn(data.status, statusMesa, 'status');
  },
  validateUpdate: (data) => {
    assertIn(data.status, statusMesa, 'status');
  },
});
