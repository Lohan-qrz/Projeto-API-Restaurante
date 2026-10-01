import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Mesa = sequelize.define(
  'Mesa',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    numero: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    status: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: 'mesas',
    timestamps: false,
  }
);
