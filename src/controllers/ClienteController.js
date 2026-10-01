import { createCrudController } from './createCrudController.js';
import { clienteService } from '../services/ClienteService.js';

export const clienteController = createCrudController(clienteService);
