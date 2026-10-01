import { asyncHandler } from '../utils/asyncHandler.js';
import { relatorioService } from '../services/RelatorioService.js';

export const relatorioController = {
  vendas: asyncHandler(async (req, res) => {
    res.status(200).json(await relatorioService.vendas());
  }),

  faturamento: asyncHandler(async (req, res) => {
    res.status(200).json(await relatorioService.faturamento());
  }),

  produtosMaisVendidos: asyncHandler(async (req, res) => {
    res.status(200).json(await relatorioService.produtosMaisVendidos());
  }),

  vendasPorFuncionario: asyncHandler(async (req, res) => {
    res.status(200).json(await relatorioService.vendasPorFuncionario());
  }),
};
