import { Request, Response } from 'express';
import { PipedriveService } from '../services/pipedriveService';
import * as convertXML from '../util/JSONtoXML';

export class DealsController {
    public async getDeals(req: Request, res: Response) {
        const pipedriveService = new PipedriveService();

        let response = await pipedriveService.getDeals();
        let xml = convertXML.objectToXML(response[0]);
        

        res.send({
            message: 'Sucesso',
            xml
        })
    }
}
