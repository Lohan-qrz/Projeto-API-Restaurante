import express from 'express';
import categoriasRoutes from './routes/categorias.routes.js';
import clientesRoutes from './routes/clientes.routes.js';
import comandaItensRoutes from './routes/comandas_itens.routes.js';
import comandasRoutes from './routes/comandas.routes.js';
import enderecosRoutes from './routes/enderecos.routes.js';
import integracaoIfoodRoutes from './routes/integracao_ifood.routes.js';
import mesasRoutes from './routes/mesas.routes.js';
import pagamentosRoutes from './routes/pagamentos.routes.js';
import pedidoItensRoutes from './routes/pedidos_itens.routes.js';
import pedidosRoutes from './routes/pedidos.routes.js';
import produtosRoutes from './routes/produtos.routes.js';
import relatoriosRoutes from './routes/relatorios.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import { AppError } from './utils/AppError.js';

const app = express();

app.use(express.json());

app.use('/categorias', categoriasRoutes);
app.use('/clientes', clientesRoutes);
app.use('/comandas/:id/itens', comandaItensRoutes);
app.use('/comandas', comandasRoutes);
app.use('/enderecos', enderecosRoutes);
app.use('/integracoes', integracaoIfoodRoutes);
app.use('/mesas', mesasRoutes);
app.use('/pagamentos', pagamentosRoutes);
app.use('/pedidos/:id/itens', pedidoItensRoutes);
app.use('/pedidos', pedidosRoutes);
app.use('/produtos', produtosRoutes);
app.use('/relatorios', relatoriosRoutes);
app.use('/usuarios', usuariosRoutes);

app.get('/', (req, res) => res.json({ message: 'API Restaurante Mock' }));

app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  console.error(err);
  return res.status(500).json({ message: 'Erro interno do servidor' });
});

export default app;
