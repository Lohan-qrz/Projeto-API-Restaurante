import { Router } from 'express';
import { clienteController } from '../controllers/ClienteController.js';

const router = Router();

router.get('/', clienteController.list);
router.get('/:id', clienteController.findById);
router.post('/', clienteController.create);
router.put('/:id', clienteController.update);
router.patch('/:id', clienteController.update);
router.delete('/:id', clienteController.delete);

export default router;
