import { Endereco } from '../models/index.js';
import { BaseRepository } from './BaseRepository.js';

export const enderecoRepository = new BaseRepository(Endereco);
