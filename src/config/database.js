import 'dotenv/config';
import { Sequelize } from 'sequelize';

const dialect = process.env.DB_DIALECT || 'sqlite';
const storage = process.env.DB_STORAGE || 'database/database.sqlite';

export const sequelize = new Sequelize({
  dialect,
  storage,
  logging: false,
});
