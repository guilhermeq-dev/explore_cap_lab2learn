using { API_SALES_ORDER_SRV } from './external/API_SALES_ORDER_SRV';

service Sap {
    entity A_SalesOrder as projection on API_SALES_ORDER_SRV.A_SalesOrder;
}