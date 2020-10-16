// import * as mongoose from "mongoose";
import mongoose from 'mongoose';
import * as dotenv from '../config/dotenv-config';

export const connect = async (): Promise<void> => {
    await mongoose.connect(`${dotenv.MONGO_CONNECTION_STRING}`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
  
export const close = (): Promise<void> => mongoose.connection.close();