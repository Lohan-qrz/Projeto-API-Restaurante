import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const PedidoItem = sequelize.define(
  'PedidoItem',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantidade: { type: DataTypes.INTEGER, allowNull: false },
    preco_unitario: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    observacao: { type: DataTypes.STRING, allowNull: true },
    produto_id: { type: DataTypes.INTEGER, allowNull: false },
    pedido_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: 'pedido_itens',
    timestamps: false,
  }
);
