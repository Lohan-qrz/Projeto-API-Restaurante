import { createCrudController } from './createCrudController.js';
import { pedidoService } from '../services/PedidoService.js';

export const pedidoController = createCrudController(pedidoService);
