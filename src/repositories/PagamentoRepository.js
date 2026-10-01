import { Pagamento, Pedido } from '../models/index.js';
import { BaseRepository } from './BaseRepository.js';

export const pagamentoRepository = new BaseRepository(Pagamento);

export const pagamentoFindOptions = {
  include: [{ model: Pedido, as: 'pedido' }],
};
