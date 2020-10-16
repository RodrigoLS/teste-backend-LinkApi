export interface DealsProductResponse {
    id: number;
    deal_id: number;
    order_nr: number;
    product_id: number;
    product_variation_id: number | null;
    item_price: number;
    discount_percentage: number;
    duration: number;
    duration_unit: number | null;
    sum_no_discount: number;
    sum: number;
    currency: string;
    enabled_flag: boolean;
    add_time: string;
    last_edit: string | null;
    comments: string | null;
    active_flag: boolean;
    tax: number;
    name: string;
    sum_formatted: string;
    quantity_formatted: string;
    quantity: number;
}