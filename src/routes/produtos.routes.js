import { Router } from 'express';
import { produtoController } from '../controllers/ProdutoController.js';

const router = Router();

router.get('/', produtoController.list);
router.get('/:id', produtoController.findById);
router.post('/', produtoController.create);
router.put('/:id', produtoController.update);
router.patch('/:id', produtoController.update);
router.delete('/:id', produtoController.delete);

export default router;
