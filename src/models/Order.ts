import * as mongoose from "mongoose";

export interface OrderInterface extends mongoose.Document {
    date: Date;
    formatted_date: string
    amount: number;
}

const OrderSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    formatted_date: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true
    },
});

const Order = mongoose.model<OrderInterface>("Order", OrderSchema);
export default Order;