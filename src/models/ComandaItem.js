import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const ComandaItem = sequelize.define(
  'ComandaItem',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    comanda_id: { type: DataTypes.INTEGER, allowNull: false },
    produto_id: { type: DataTypes.INTEGER, allowNull: false },
    quantidade: { type: DataTypes.INTEGER, allowNull: false },
    preco_unitario: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    observacao: { type: DataTypes.STRING, allowNull: true },
  },
  {
    tableName: 'comanda_itens',
    timestamps: false,
  }
);
