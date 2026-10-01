import { createCrudController } from './createCrudController.js';
import { produtoService } from '../services/ProdutoService.js';

export const produtoController = createCrudController(produtoService);
