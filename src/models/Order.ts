import * as mongoose from "mongoose";

export interface OrderInterface extends mongoose.Document {
    data: Date;
    amount: number;
}

const OrderSchema = new mongoose.Schema({
    data: {
        type: Date,
        required: true,
        unique: true,
        trim: true,
    },
    amount: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model<OrderInterface>("Order", OrderSchema);
export default Order;