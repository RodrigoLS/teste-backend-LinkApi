export interface DealsResponse {
    id: number;
    creator_user_id: {
        name: string;
        email: string;
    }
    person_id: {
        name: string;
        email: [{
            value: string;
        }],
        phone: [{
            value: string;
        }]
        value: number;
    }
    stage_id: number;
    title: string;
    value: number;
    currency: number;
    add_time: string;
    update_time: string;
    stage_change_time: string;
    status: string;
    visible_to: string;
    close_time: string;
    pipeline_id: number;
    won_time: string;
    first_won_time: string;
    products_count: number;
    expected_close_date: string;
    person_name: string;
    formatted_value: string;
    weighted_value: number;
    weighted_value_currency: string;
    owner_name: string;
}

