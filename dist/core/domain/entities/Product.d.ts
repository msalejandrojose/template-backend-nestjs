export declare class Product {
    id: number;
    name: string;
    description: string;
    unitPrice: number;
    unitsInStock: number;
    unitsOnOrder: number;
    static create(name: string, price: number): Product;
}
