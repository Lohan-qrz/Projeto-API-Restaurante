import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Endereco = sequelize.define(
  'Endereco',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    bairro: { type: DataTypes.STRING, allowNull: false },
    rua: { type: DataTypes.STRING, allowNull: false },
    numero: { type: DataTypes.STRING, allowNull: false },
    complemento: { type: DataTypes.STRING, allowNull: true },
    referencia: { type: DataTypes.STRING, allowNull: true },
  },
  {
    tableName: 'enderecos',
    timestamps: false,
  }
);
