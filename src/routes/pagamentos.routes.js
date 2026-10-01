import { Router } from 'express';
import { pagamentoController } from '../controllers/PagamentoController.js';

const router = Router();

router.get('/', pagamentoController.list);
router.get('/:id', pagamentoController.findById);
router.post('/', pagamentoController.create);
router.patch('/:id', pagamentoController.update);
router.delete('/:id', pagamentoController.delete);

export default router;
