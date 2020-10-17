import { Deal } from './../interfaces/Deal';
import axios from 'axios';
import * as dotenv from '../config/dotenv-config';
import * as convertXML from '../util/JSONtoXML';
import { BlingServiceError } from './../util/errors/internal-errors';


export class BlingService {
    private api_base_url = 'https://bling.com.br/Api/v2/pedido/json';
    private api_token = dotenv.API_BLING_TOKEN;

    public async saveOrders(deals: Deal[]): Promise<boolean> {
        try {
            for (let i = 0; i <= deals.length - 1; i++) {
                const xml = convertXML.objectToXML(deals[i]);
                await this.saveOrder(xml);
            }
            
            return true;

        } catch (error) {
            throw new BlingServiceError(error);
        }
    }

    private async saveOrder(xml: string) {
        try {
            const response = await axios
                .post(`${this.api_base_url}?apikey=${this.api_token}&xml=${xml}`)

            return response;

        } catch (error) {
            throw new BlingServiceError(error);
        }
    }

}