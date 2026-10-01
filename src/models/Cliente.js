import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Cliente = sequelize.define(
  'Cliente',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    telefone: { type: DataTypes.STRING, allowNull: false },
    endereco_id: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    tableName: 'clientes',
    timestamps: false,
  }
);
