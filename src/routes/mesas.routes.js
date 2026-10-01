import { Router } from 'express';
import { mesaController } from '../controllers/MesaController.js';

const router = Router();

router.get('/', mesaController.list);
router.get('/:id', mesaController.findById);
router.post('/', mesaController.create);
router.patch('/:id', mesaController.update);
router.delete('/:id', mesaController.delete);

export default router;
