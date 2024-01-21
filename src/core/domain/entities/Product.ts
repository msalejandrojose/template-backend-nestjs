export class Product{
    id: number;
    name: string;
    description: string;
    unitPrice: number;
    unitsInStock: number;
    unitsOnOrder: number;

    static create(name:string,price:number){
        const product = new Product();
        product.id= 1;
        product.name= name;
        product.description= "Descripcion de prueba";
        product.unitPrice= price;
        product.unitsInStock= 0;
        product.unitsOnOrder= 0;
        return product;
    }
}