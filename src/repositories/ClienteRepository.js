import { Cliente, Endereco } from '../models/index.js';
import { BaseRepository } from './BaseRepository.js';

export const clienteRepository = new BaseRepository(Cliente);

export const clienteFindOptions = {
  include: [{ model: Endereco, as: 'endereco' }],
};
