import express, { Application } from 'express';
import cors, { CorsOptions } from 'cors';
import Routes from './routes';

require('dotenv').config();

export default class Server {
  constructor(app: Application) {
    this.config(app);

    new Routes(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: 'http://' + process.env.HOST + ':' + process.env.PORT
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}