import { createCrudController } from './createCrudController.js';
import { comandaService } from '../services/ComandaService.js';

export const comandaController = createCrudController(comandaService);
