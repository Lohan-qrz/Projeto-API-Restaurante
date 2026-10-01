import { Router } from 'express';
import { relatorioController } from '../controllers/RelatorioController.js';

const router = Router();

router.get('/vendas', relatorioController.vendas);
router.get('/faturamento', relatorioController.faturamento);
router.get('/produtos-mais-vendidos', relatorioController.produtosMaisVendidos);
router.get('/vendas-por-funcionario', relatorioController.vendasPorFuncionario);

export default router;
