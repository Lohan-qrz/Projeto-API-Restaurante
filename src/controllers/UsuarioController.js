import { createCrudController } from './createCrudController.js';
import { usuarioService } from '../services/UsuarioService.js';

export const usuarioController = createCrudController(usuarioService);
