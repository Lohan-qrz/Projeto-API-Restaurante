import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Pagamento = sequelize.define(
  'Pagamento',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    pedido_id: { type: DataTypes.INTEGER, allowNull: false },
    metodo: { type: DataTypes.STRING, allowNull: false },
    valor: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    pago_em: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: 'pagamentos',
    timestamps: false,
  }
);
