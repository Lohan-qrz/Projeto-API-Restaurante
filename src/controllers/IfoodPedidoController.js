import { asyncHandler } from '../utils/asyncHandler.js';
import { ifoodPedidoService } from '../services/IfoodPedidoService.js';

export const ifoodPedidoController = {
  list: asyncHandler(async (req, res) => {
    const pedidos = await ifoodPedidoService.list();
    res.status(200).json(pedidos);
  }),

  findById: asyncHandler(async (req, res) => {
    const pedido = await ifoodPedidoService.findById(Number(req.params.id));
    res.status(200).json(pedido);
  }),

  receiveWebhook: asyncHandler(async (req, res) => {
    const result = await ifoodPedidoService.receiveWebhook(req.body);
    res.status(201).json(result);
  }),
};
