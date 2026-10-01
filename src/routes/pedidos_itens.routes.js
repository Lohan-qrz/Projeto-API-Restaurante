import { Router } from 'express';
import { pedidoItemController } from '../controllers/PedidoItemController.js';

const router = Router({ mergeParams: true });

router.get('/', pedidoItemController.list);
router.get('/:itemId', pedidoItemController.findById);
router.post('/', pedidoItemController.create);
router.patch('/:itemId', pedidoItemController.update);
router.delete('/:itemId', pedidoItemController.delete);

export default router;
