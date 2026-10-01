import { asyncHandler } from '../utils/asyncHandler.js';

export const createCrudController = (service) => ({
  list: asyncHandler(async (req, res) => {
    const items = await service.list(req.params);
    res.status(200).json(items);
  }),

  findById: asyncHandler(async (req, res) => {
    const item = await service.findById(Number(req.params.id), req.params);
    res.status(200).json(item);
  }),

  create: asyncHandler(async (req, res) => {
    const item = await service.create(req.body, req.params);
    res.status(201).json(item);
  }),

  update: asyncHandler(async (req, res) => {
    const item = await service.update(
      Number(req.params.id),
      req.body,
      req.params
    );
    res.status(200).json(item);
  }),

  delete: asyncHandler(async (req, res) => {
    await service.delete(Number(req.params.id), req.params);
    res.status(204).send();
  }),
});
