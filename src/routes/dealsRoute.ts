import { Application } from "express";
import { DealsController } from "../controllers/dealsController";

export class DealsRoutes {

    public dealsController: DealsController = new DealsController();

    constructor(app: Application) {
        this.setRoutes(app);
    }

    private setRoutes(app: Application): void {
        app.get('/deals', this.dealsController.getDeals);
    }
}