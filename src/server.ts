import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hi Dev' });
});

app.listen(3333, () => {
  console.log('Server started');
});
