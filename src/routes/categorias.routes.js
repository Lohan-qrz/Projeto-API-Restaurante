import { Router } from 'express';
import { categoriaController } from '../controllers/CategoriaController.js';

const router = Router();

router.get('/', categoriaController.list);
router.get('/:id', categoriaController.findById);
router.post('/', categoriaController.create);
router.put('/:id', categoriaController.update);
router.delete('/:id', categoriaController.delete);

export default router;
