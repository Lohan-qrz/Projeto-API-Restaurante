import { Router } from 'express';
import { comandaController } from '../controllers/ComandaController.js';

const router = Router();

router.get('/', comandaController.list);
router.get('/:id', comandaController.findById);
router.post('/', comandaController.create);
router.patch('/:id', comandaController.update);
router.delete('/:id', comandaController.delete);

export default router;
