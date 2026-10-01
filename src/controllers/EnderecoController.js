import { createCrudController } from './createCrudController.js';
import { enderecoService } from '../services/EnderecoService.js';

export const enderecoController = createCrudController(enderecoService);
