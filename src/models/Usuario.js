import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Usuario = sequelize.define(
  'Usuario',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha_hash: { type: DataTypes.STRING, allowNull: false },
    funcao: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: 'usuarios',
    timestamps: false,
  }
);
