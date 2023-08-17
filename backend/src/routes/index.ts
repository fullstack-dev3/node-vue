import { Application } from 'express';
import homeRoutes from './home';

export default class Routes {
  constructor(app: Application) {
    app.use('/api', homeRoutes);
  }
}