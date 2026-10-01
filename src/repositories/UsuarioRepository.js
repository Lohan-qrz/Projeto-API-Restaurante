import { Usuario } from '../models/index.js';
import { BaseRepository } from './BaseRepository.js';

export const usuarioRepository = new BaseRepository(Usuario);
