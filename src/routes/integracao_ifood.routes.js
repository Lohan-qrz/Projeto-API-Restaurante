import { Router } from 'express';
import { ifoodPedidoController } from '../controllers/IfoodPedidoController.js';

const router = Router();

router.get('/ifood/pedidos', ifoodPedidoController.list);
router.get('/ifood/pedidos/:id', ifoodPedidoController.findById);
router.post('/ifood/webhook', ifoodPedidoController.receiveWebhook);

export default router;
