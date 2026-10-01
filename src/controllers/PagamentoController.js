import { createCrudController } from './createCrudController.js';
import { pagamentoService } from '../services/PagamentoService.js';

export const pagamentoController = createCrudController(pagamentoService);
