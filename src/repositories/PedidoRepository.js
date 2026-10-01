import { Pedido, Cliente, Usuario } from '../models/index.js';
import { BaseRepository } from './BaseRepository.js';

export const pedidoRepository = new BaseRepository(Pedido);

export const pedidoFindOptions = {
  include: [
    { model: Cliente, as: 'cliente' },
    { model: Usuario, as: 'usuario' },
  ],
};
