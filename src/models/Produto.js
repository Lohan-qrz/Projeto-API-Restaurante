import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Produto = sequelize.define(
  'Produto',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.STRING, allowNull: true },
    preco: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    categoria_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: 'produtos',
    timestamps: false,
  }
);
