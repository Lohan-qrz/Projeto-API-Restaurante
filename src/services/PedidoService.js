import { BaseService } from './BaseService.js';
import {
  pedidoFindOptions,
  pedidoRepository,
} from '../repositories/PedidoRepository.js';
import { clienteRepository } from '../repositories/ClienteRepository.js';
import { usuarioRepository } from '../repositories/UsuarioRepository.js';
import {
  assertExists,
  assertIn,
  assertNonNegative,
  requireFields,
} from '../utils/validation.js';

const tiposPedido = ['RETIRADA', 'MESA', 'IFOOD'];
const statusPedido = ['AGUARDANDO', 'PREPARANDO', 'ENTREGUE', 'CANCELADO'];

const validatePedido = async (data, partial = false) => {
  if (!partial)
    requireFields(data, [
      'tipo',
      'status',
      'cliente_id',
      'usuario_id',
      'total',
    ]);
  assertIn(data.tipo, tiposPedido, 'tipo');
  assertIn(data.status, statusPedido, 'status');
  if (data.total !== undefined) assertNonNegative(data.total, 'total');
  if (data.cliente_id !== undefined)
    await assertExists(clienteRepository, data.cliente_id, 'Cliente');
  if (data.usuario_id !== undefined)
    await assertExists(usuarioRepository, data.usuario_id, 'Usuário');
  if (!partial && data.created_at === undefined) data.created_at = new Date();
};

export const pedidoService = new BaseService(pedidoRepository, {
  resourceName: 'Pedido',
  findOptions: pedidoFindOptions,
  validateCreate: (data) => validatePedido(data),
  validateUpdate: (data) => validatePedido(data, true),
});
