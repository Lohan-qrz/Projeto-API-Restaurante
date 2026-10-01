import { asyncHandler } from '../utils/asyncHandler.js';
import { comandaItemService } from '../services/ComandaItemService.js';

export const comandaItemController = {
  list: asyncHandler(async (req, res) => {
    const itens = await comandaItemService.list(req.params);
    res.status(200).json(itens);
  }),

  findById: asyncHandler(async (req, res) => {
    const item = await comandaItemService.findById(
      Number(req.params.itemId),
      req.params
    );
    res.status(200).json(item);
  }),

  create: asyncHandler(async (req, res) => {
    const item = await comandaItemService.create(req.body, req.params);
    res.status(201).json(item);
  }),

  update: asyncHandler(async (req, res) => {
    const item = await comandaItemService.update(
      Number(req.params.itemId),
      req.body,
      req.params
    );
    res.status(200).json(item);
  }),

  delete: asyncHandler(async (req, res) => {
    const item = await comandaItemService.delete(
      Number(req.params.itemId),
      req.params
    );
    res.status(200).json({
      message: 'Item removido com sucesso',
      item,
    });
  }),
};
