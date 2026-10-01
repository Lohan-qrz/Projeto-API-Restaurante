import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Pedido = sequelize.define(
  'Pedido',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tipo: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    cliente_id: { type: DataTypes.INTEGER, allowNull: false },
    usuario_id: { type: DataTypes.INTEGER, allowNull: false },
    total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: 'pedidos',
    timestamps: false,
  }
);
