import express, { Application } from 'express';
import Server from './src/index';

require('dotenv').config();

const app: Application = express();

new Server(app);

const HOST: string = process.env.HOST ? process.env.HOST : 'localhost';
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

app
  .listen(PORT, HOST, function () {
    console.log(`Server is running on ${HOST}:${PORT}.`);
  })
  .on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log('Error: address already in use');
    } else {
      console.log(err);
    }
  });