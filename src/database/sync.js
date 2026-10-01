import { sequelize } from '../models/index.js';

export const initializeDatabase = async () => {
  await sequelize.authenticate();
  await sequelize.sync();
};

if (process.argv[1]?.endsWith('sync.js')) {
  await initializeDatabase();
  await sequelize.close();
  console.log('Banco sincronizado com sucesso.');
}
