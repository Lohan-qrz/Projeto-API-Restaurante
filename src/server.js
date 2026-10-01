import 'dotenv/config';
import app from './app.js';
import { initializeDatabase } from './database/sync.js';

const port = process.env.PORT || 3000;

await initializeDatabase();

app.listen(port, () => console.log(`Rodando na porta ${port}`));
