import { Product } from './Product';

export interface Deal {
    pedido: {
        data: string;
        cliente: {
            id: number;
            nome: string;
            fone: string;
            email: string;
        }
        itens: {
            item: Product[];
        }
    }
}