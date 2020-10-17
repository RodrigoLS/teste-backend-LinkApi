import { Request, Response } from 'express';
import { PipedriveService } from '../services/pipedriveService';
import { BlingService } from './../services/blingService';
import { Deal } from '../interfaces/Deal';

export class DealsController {
    public async getDeals(req: Request, res: Response) {
        const pipedriveService = new PipedriveService();
        const blingService = new BlingService();

        const deals: Deal[] = await pipedriveService.getDeals();
        const response = blingService.saveOrders(deals);

        if(response) {
            res.send({
                message: 'Sucess',
                status: 200
            })
        } 
    }
}
