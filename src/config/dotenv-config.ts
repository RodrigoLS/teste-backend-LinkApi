import * as dotenv from "dotenv";

const path = `${__dirname}/../../.env`; 
dotenv.config({ path: path });

export const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
export const API_PIPEDRIVE_TOKEN = process.env.API_PIPEDRIVE_TOKEN;