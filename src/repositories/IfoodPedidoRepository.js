import { IfoodPedido, Pedido } from '../models/index.js';
import { BaseRepository } from './BaseRepository.js';

export const ifoodPedidoRepository = new BaseRepository(IfoodPedido);

export const ifoodPedidoFindOptions = {
  include: [{ model: Pedido, as: 'pedido' }],
};
