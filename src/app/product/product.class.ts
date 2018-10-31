import { Vendor } from '../vendor/vendor.class';

export class Product {

    Id: number;
    PartNumber: string;
    Name: string;
    Price: number;
    Unit: string;
    PhotoPath: string;
    Vendor: Vendor;

    constructor() {
        this.Id = 0;
        this.Price = 0;
    }
}