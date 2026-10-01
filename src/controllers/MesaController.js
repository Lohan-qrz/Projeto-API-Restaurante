import { createCrudController } from './createCrudController.js';
import { mesaService } from '../services/MesaService.js';

export const mesaController = createCrudController(mesaService);
