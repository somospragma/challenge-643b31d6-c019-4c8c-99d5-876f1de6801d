import express from 'express';
import routes from './presentation/routes';
import errorHandler from './utils/errorHandler';
import { config } from './config/database';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});