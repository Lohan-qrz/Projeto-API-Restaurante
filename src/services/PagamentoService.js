import { BaseService } from './BaseService.js';
import {
  pagamentoFindOptions,
  pagamentoRepository,
} from '../repositories/PagamentoRepository.js';
import { pedidoRepository } from '../repositories/PedidoRepository.js';
import {
  assertExists,
  assertIn,
  assertPositive,
  requireFields,
} from '../utils/validation.js';

const metodosPagamento = ['PIX', 'CARTAO', 'DINHEIRO', 'ONLINE'];
const statusPagamento = ['PENDENTE', 'PAGO', 'CANCELADO', 'ESTORNADO'];

const validatePagamento = async (data, partial = false) => {
  if (!partial) requireFields(data, ['pedido_id', 'metodo', 'valor', 'status']);
  assertIn(data.metodo, metodosPagamento, 'metodo');
  assertIn(data.status, statusPagamento, 'status');
  if (data.valor !== undefined) assertPositive(data.valor, 'valor');
  if (data.pedido_id !== undefined)
    await assertExists(pedidoRepository, data.pedido_id, 'Pedido');
  if (data.status === 'PAGO' && data.pago_em === undefined)
    data.pago_em = new Date();
};

export const pagamentoService = new BaseService(pagamentoRepository, {
  resourceName: 'Pagamento',
  findOptions: pagamentoFindOptions,
  validateCreate: (data) => validatePagamento(data),
  validateUpdate: (data) => validatePagamento(data, true),
});
