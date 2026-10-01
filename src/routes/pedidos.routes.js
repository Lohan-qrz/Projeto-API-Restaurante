import { Router } from 'express';
import { pedidoController } from '../controllers/PedidoController.js';

const router = Router();

router.get('/', pedidoController.list);
router.get('/:id', pedidoController.findById);
router.post('/', pedidoController.create);
router.put('/:id', pedidoController.update);
router.patch('/:id', pedidoController.update);
router.delete('/:id', pedidoController.delete);

export default router;
