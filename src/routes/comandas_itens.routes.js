import { Router } from 'express';
import { comandaItemController } from '../controllers/ComandaItemController.js';

const router = Router({ mergeParams: true });

router.get('/', comandaItemController.list);
router.get('/:itemId', comandaItemController.findById);
router.post('/', comandaItemController.create);
router.patch('/:itemId', comandaItemController.update);
router.delete('/:itemId', comandaItemController.delete);

export default router;
