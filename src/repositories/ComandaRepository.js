import { Comanda, Mesa } from '../models/index.js';
import { BaseRepository } from './BaseRepository.js';

export const comandaRepository = new BaseRepository(Comanda);

export const comandaFindOptions = {
  include: [{ model: Mesa, as: 'mesa' }],
};
