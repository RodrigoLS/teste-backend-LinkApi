import { Request, Response } from 'express';
import { PipedriveService } from '../services/pipedriveService';
import { BlingService } from './../services/blingService';
import { Deal } from '../interfaces/Deal';
import { OrderService } from '../services/orderService';

export class DealsController {
    public async getDeals(req: Request, res: Response) {
        const pipedriveService = new PipedriveService();
        const blingService = new BlingService();
        const orderService = new OrderService();

        const deals: Deal[] = await pipedriveService.getDeals();

        if(!deals) {
            this.serverErrorResponse(res);
        }

        const response = await blingService.saveOrders(deals);

        if(!response) {
            this.serverErrorResponse(res);
        }

        const result = await orderService.setTotalOrdersValuePerDay(deals);

        if(!result) {
            this.serverErrorResponse(res);
        }
        
        res.status(200).send({
            status_code: 200,
            message: 'success'
        })
    }

    private serverErrorResponse(res: Response) {
        res.status(500).send({
            status_code: 500,
            message: 'Unexpected error while performing an integration, please try again later.'
        })
    }
}
