import { OrderServiceError } from './../util/errors/internal-errors';
import { Deal } from './../interfaces/Deal';
import * as formattedDate from '../util/formattedDate';
import * as daoOrder from '../repository/dao-order';
import { OrderInterface } from '../models/Order'

export class OrderService {

    public async setTotalOrdersValuePerDay(deals: Deal[]): Promise<boolean> {
        const response = this.calcTotalValuePerDay(deals);

        try {
            for (const key in response) {
                const date = formattedDate.brazilianInAmerican(key);
                const formatted_date = key;
                const amount =response[key];

                const result = await daoOrder.get(date);
                
                if(!result) {
                    await daoOrder.create(date, formatted_date, amount);
                } else {
                    await daoOrder.update(result._id, amount);
                }
            }

            return true;

        } catch (error) {
            throw new OrderServiceError(error);
        }
    }

    public async getAllOrders(): Promise<OrderInterface[]> {
        try {
            return await daoOrder.getAll();

        } catch (error) {
            throw new OrderServiceError(error);
        }
    }

    private calcTotalValuePerDay(deals: Deal[]) {
        return deals.reduce((obj: any, value: Deal) => {
            const key = `${value.pedido.data}`;
            if (obj[key] == null) obj[key] = 0;

            obj[key] += value.pedido.valor;
            return obj;
        }, {});
    }
}