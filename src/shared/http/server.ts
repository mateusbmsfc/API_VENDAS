import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import '@shared/typeorm';
import { routes } from './routes';
import { HandleAppError } from '@shared/middleware/HandleAppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(HandleAppError.execute);

app.listen(3333, () => {
  console.log('🔥 Server running on port 3333');
});
