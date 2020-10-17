import { Deal } from './../interfaces/Deal';
import axios from 'axios';
import * as dotenv from '../config/dotenv-config';
import * as convertXML from '../util/JSONtoXML';


export class BlingService {
    private api_base_url = 'https://bling.com.br/Api/v2/pedido/json';
    private api_token = dotenv.API_BLING_TOKEN;

    constructor() {

    }

    public async saveOrders(deals: Deal[]): Promise<boolean> {
        try {
            for (let i = 0; i <= deals.length - 1; i++) {
                const xml = convertXML.objectToXML(deals[i]);
                console.log('save deal')
                await this.saveOrder(xml);
            }
            
            console.log('return')
            return true;

        } catch (error) {
            throw new Error();
        }
    }

    private async saveOrder(xml: string) {
        try {
            let response = await axios
                .post(`${this.api_base_url}?apikey=${this.api_token}&xml=${xml}`)

            return response;

        } catch (error) {
            throw new Error();
        }
    }

}