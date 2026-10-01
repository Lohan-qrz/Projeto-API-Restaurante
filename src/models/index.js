import { sequelize } from '../config/database.js';
import { Usuario } from './Usuario.js';
import { Categoria } from './Categoria.js';
import { Produto } from './Produto.js';
import { Mesa } from './Mesa.js';
import { Comanda } from './Comanda.js';
import { ComandaItem } from './ComandaItem.js';
import { Endereco } from './Endereco.js';
import { Cliente } from './Cliente.js';
import { Pedido } from './Pedido.js';
import { PedidoItem } from './PedidoItem.js';
import { Pagamento } from './Pagamento.js';
import { IfoodPedido } from './IfoodPedido.js';

Categoria.hasMany(Produto, { foreignKey: 'categoria_id', as: 'produtos' });
Produto.belongsTo(Categoria, { foreignKey: 'categoria_id', as: 'categoria' });

Mesa.hasMany(Comanda, { foreignKey: 'mesa_id', as: 'comandas' });
Comanda.belongsTo(Mesa, { foreignKey: 'mesa_id', as: 'mesa' });

Comanda.hasMany(ComandaItem, { foreignKey: 'comanda_id', as: 'itens' });
ComandaItem.belongsTo(Comanda, { foreignKey: 'comanda_id', as: 'comanda' });
Produto.hasMany(ComandaItem, { foreignKey: 'produto_id', as: 'comanda_itens' });
ComandaItem.belongsTo(Produto, { foreignKey: 'produto_id', as: 'produto' });

Endereco.hasMany(Cliente, { foreignKey: 'endereco_id', as: 'clientes' });
Cliente.belongsTo(Endereco, { foreignKey: 'endereco_id', as: 'endereco' });

Cliente.hasMany(Pedido, { foreignKey: 'cliente_id', as: 'pedidos' });
Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id', as: 'cliente' });
Usuario.hasMany(Pedido, { foreignKey: 'usuario_id', as: 'pedidos' });
Pedido.belongsTo(Usuario, { foreignKey: 'usuario_id', as: 'usuario' });

Pedido.hasMany(PedidoItem, { foreignKey: 'pedido_id', as: 'itens' });
PedidoItem.belongsTo(Pedido, { foreignKey: 'pedido_id', as: 'pedido' });
Produto.hasMany(PedidoItem, { foreignKey: 'produto_id', as: 'pedido_itens' });
PedidoItem.belongsTo(Produto, { foreignKey: 'produto_id', as: 'produto' });

Pedido.hasMany(Pagamento, { foreignKey: 'pedido_id', as: 'pagamentos' });
Pagamento.belongsTo(Pedido, { foreignKey: 'pedido_id', as: 'pedido' });

Pedido.hasMany(IfoodPedido, { foreignKey: 'pedido_id', as: 'ifood_pedidos' });
IfoodPedido.belongsTo(Pedido, { foreignKey: 'pedido_id', as: 'pedido' });

export {
  sequelize,
  Usuario,
  Categoria,
  Produto,
  Mesa,
  Comanda,
  ComandaItem,
  Endereco,
  Cliente,
  Pedido,
  PedidoItem,
  Pagamento,
  IfoodPedido,
};
