import Order from '../models/Order';
import { DatabaseError } from './../util/errors/internal-errors';

export const create = async (date: Date, formatted_date: string, amount: number) => {
    try {
        const order = new Order({ date, formatted_date, amount });
        return await order.save();

    } catch (error) {
        throw new DatabaseError(error);
    }
}

export const update = async (id: string, amount: number) => {
    try {
        return await Order.findOneAndUpdate({ _id: id }, { amount });   
    } catch (error) {
        throw new DatabaseError(error);
    }
}

export const getAll = async () => {
    try {
        const result = Order.find().sort({ date: -1 });
        return result;

    } catch (error) {
        throw new DatabaseError(error);
    }

}

export const get = async (date: Date) => {
    try {
        const result = await Order.findOne({date});
        return result;

    } catch (error) {
        throw new DatabaseError(error);
    }
}