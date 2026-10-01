import { createCrudController } from './createCrudController.js';
import { categoriaService } from '../services/CategoriaService.js';

export const categoriaController = createCrudController(categoriaService);
