import { Application } from 'express';
import { DealsRoutes } from './dealsRoute';

export class Routes {
  public dealsRoute: DealsRoutes | undefined;

  public routes(app: Application): void {
    this.dealsRoute = new DealsRoutes(app);
  }
}