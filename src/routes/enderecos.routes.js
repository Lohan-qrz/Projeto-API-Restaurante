import { Router } from 'express';
import { enderecoController } from '../controllers/EnderecoController.js';

const router = Router();

router.get('/', enderecoController.list);
router.get('/:id', enderecoController.findById);
router.post('/', enderecoController.create);
router.put('/:id', enderecoController.update);
router.patch('/:id', enderecoController.update);
router.delete('/:id', enderecoController.delete);

export default router;
