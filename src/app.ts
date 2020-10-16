import express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/indexRoute";
import * as database from "./config/database-connect";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private async config(): Promise<void> {
    // support application/json type post data
    this.app.use(bodyParser.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    await this.databaseSetup();
  }

  private async databaseSetup(): Promise<void> {
    await database.connect();
  }
}

export default new App().app;