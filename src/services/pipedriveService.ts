import axios from 'axios';
import * as dotenv from '../config/dotenv-config';
import { DealsResponse, DealsProductResponse, Deal, Product } from '../interfaces';
import * as formattedDate from '../util/formattedDate'
import { PipedriveServiceError } from './../util/errors/internal-errors';


export class PipedriveService {
    private api_base_url = 'https://linkapi14.pipedrive.com/api/v1';
    private api_token = dotenv.API_PIPEDRIVE_TOKEN;

    constructor() {

    }

    public async getDeals(): Promise<Deal[]> {
        try {
            const response = await axios
                .get(`${this.api_base_url}/deals?status=won&api_token=${this.api_token}`);

            return this.normalizeResponseDeals(response.data.data);

        } catch (error) {
            throw new PipedriveServiceError(error);
        }
    }

    private async getDealProducts(id: number): Promise<DealsProductResponse[]> {
        try {
            const response = await axios
                .get(`${this.api_base_url}/deals/${id}/products?api_token=${this.api_token}`)

            return response.data.data;

        } catch (error) {
            throw new PipedriveServiceError(error);
        }
    }

    private async normalizeResponseDeals(data: DealsResponse[]): Promise<Deal[]> {

        const listDeals: Deal[] = [];

        for (let i = 0; i <= data.length - 1; i++) {
            let listProducts: Product[] = [];
            const productsResponse = await this.getDealProducts(data[i].id);
            
            if(productsResponse) {
                listProducts = this.normalizeResponseProducts(productsResponse);
            }

            const deal: Deal = {
                pedido: {
                    data: formattedDate.americanInBrazilian(data[i].won_time),
                    cliente: {
                        id: data[i].person_id.value,
                        nome: data[i].person_id.name,
                        fone: data[i].person_id.phone[0].value,
                        email: data[i].person_id.email[0].value
                    },
                    itens: {
                        item: listProducts
                    },
                    valor: data[i].weighted_value
                }
            }

            listDeals.push(deal);
        }

        return listDeals;
    }


    private normalizeResponseProducts(data: DealsProductResponse[]): Product[] {
        const listProducts: Product[] = [];

        data.forEach(element => {
            const product = {
                codigo: element.id.toString(),
                descricao: element.name,
                qtde: element.quantity,
                vlr_unit: element.item_price
            }

            listProducts.push(product);
        });

        return listProducts;
    }
}