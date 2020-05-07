import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());

app.use(express.json());
// rota para visualizar arquivos do avatar
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
// tratativa dos erros depois das rotas!!!!
// middleware para tratativa de erros tem que ter 4 parametros
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  // se for um erro que conheço, gerado pela minha app
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('🚀 Backend started on port 3333!');
});
