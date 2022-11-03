export interface DASHBOARD_INF {
    select: boolean;
    serial_number: number;
    first_name: string;
    last_name: string;
    email: boolean;
    phone: boolean;
    psotal_code: boolean;
    action: any;
}

export interface NOTIFICATION_MANAGEMENT_INF {
    serial_number: number;
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    mobile_number: number;
    title: string;
    description: string;
    sent_on: string;
    action: any
}

export interface TRANSACTION_MANAGEMENT_INF {
    select: boolean;
    serial_number: number;
    transaction_id: number;
    first_name: string;
    last_name: string;
    payment_date: string;
    amount_paid: number;
    status: boolean;
}

export interface EARNING_MANAGEMENT_INF {
    select: boolean;
    serial_number: number;
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
    mobile_number: number;
    transaction_status: boolean;
    amount: number;
    data_time: string
}

export interface USER_TRANSACTION {
    serial_number: number;
    transaction_id: number;
    amount: number;
    data_time: string;
}