import { Router } from 'express';
import { usuarioController } from '../controllers/UsuarioController.js';

const router = Router();

router.get('/', usuarioController.list);
router.get('/:id', usuarioController.findById);
router.post('/', usuarioController.create);
router.put('/:id', usuarioController.update);
router.patch('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

export default router;
