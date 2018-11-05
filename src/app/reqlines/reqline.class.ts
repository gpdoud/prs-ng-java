import { Product } from '../product/product.class';
import { Request } from '../request/request.class';

export class Reqline {

    Id: number;
    ProductId: number;
    Product: Product;
    RequestId: number;
    Request: Request;
    Quantity: number;
    Active: boolean;

    constructor() {
        this.Id = 0;
        this.Active = true;
        this.Quantity = 1;
    }
}