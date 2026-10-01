import { asyncHandler } from '../utils/asyncHandler.js';
import { pedidoItemService } from '../services/PedidoItemService.js';

export const pedidoItemController = {
  list: asyncHandler(async (req, res) => {
    const itens = await pedidoItemService.list(req.params);
    res.status(200).json(itens);
  }),

  findById: asyncHandler(async (req, res) => {
    const item = await pedidoItemService.findById(
      Number(req.params.itemId),
      req.params
    );
    res.status(200).json(item);
  }),

  create: asyncHandler(async (req, res) => {
    const item = await pedidoItemService.create(req.body, req.params);
    res.status(201).json(item);
  }),

  update: asyncHandler(async (req, res) => {
    const item = await pedidoItemService.update(
      Number(req.params.itemId),
      req.body,
      req.params
    );
    res.status(200).json(item);
  }),

  delete: asyncHandler(async (req, res) => {
    const item = await pedidoItemService.delete(
      Number(req.params.itemId),
      req.params
    );
    res.status(200).json({
      message: 'Item removido com sucesso',
      item,
    });
  }),
};
