import { Application } from "express";
import { DealsController } from "../controllers/dealsController";
import { OrdersController } from './../controllers/ordersController';

export class DealsRoutes {

    public dealsController = new DealsController();
    public ordersController = new OrdersController();

    constructor(app: Application) {
        this.setRoutes(app);
    }

    private setRoutes(app: Application): void {
        app.get('/deals', this.dealsController.getDeals);
        app.get('/orders', this.ordersController.getAll);
    }
}