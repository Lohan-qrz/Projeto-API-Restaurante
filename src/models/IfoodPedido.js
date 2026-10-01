import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const IfoodPedido = sequelize.define(
  'IfoodPedido',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    pedido_id: { type: DataTypes.INTEGER, allowNull: true },
    ifood_order_id: { type: DataTypes.STRING, allowNull: false },
    payload_json: { type: DataTypes.JSON, allowNull: false },
    status_ifood: { type: DataTypes.STRING, allowNull: false },
    sincronizado_em: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: 'ifood_pedidos',
    timestamps: false,
  }
);
