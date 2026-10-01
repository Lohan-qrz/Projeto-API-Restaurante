import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Comanda = sequelize.define(
  'Comanda',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    mesa_id: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    aberta_em: { type: DataTypes.DATE, allowNull: false },
    fechada_em: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: 'comandas',
    timestamps: false,
  }
);
