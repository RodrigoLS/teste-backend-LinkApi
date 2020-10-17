import { Request, Response } from 'express';
import { OrderService } from './../services/orderService';
export class OrdersController {
    
    public async getAll(req: Request, res: Response) {

        const orderService = new OrderService();
        const result = await orderService.getAllOrders()

        if(!result) {
            res.status(500).send({
                status_code: 500,
                message: 'Could not perform an operation'
            })
        }

        res.status(200).send({
            status_code: 200,
            message: 'success',
            data: result
        })
    }
}