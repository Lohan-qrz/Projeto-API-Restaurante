import { BaseService } from './BaseService.js';
import {
  comandaFindOptions,
  comandaRepository,
} from '../repositories/ComandaRepository.js';
import { mesaRepository } from '../repositories/MesaRepository.js';
import { assertExists, assertIn, requireFields } from '../utils/validation.js';

const statusComanda = ['ABERTA', 'FECHADA', 'CANCELADA'];

const validateComanda = async (data, partial = false) => {
  if (!partial) requireFields(data, ['mesa_id', 'status']);
  if (data.status !== undefined) assertIn(data.status, statusComanda, 'status');
  if (data.mesa_id !== undefined)
    await assertExists(mesaRepository, data.mesa_id, 'Mesa');
  if (!partial && data.aberta_em === undefined) data.aberta_em = new Date();
  if (data.status === 'FECHADA' && data.fechada_em === undefined)
    data.fechada_em = new Date();
};

export const comandaService = new BaseService(comandaRepository, {
  resourceName: 'Comanda',
  findOptions: comandaFindOptions,
  validateCreate: (data) => validateComanda(data),
  validateUpdate: (data) => validateComanda(data, true),
});
