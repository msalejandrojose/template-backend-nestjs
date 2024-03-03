export class Order {
    protected orderBy: OrderItem[];

    constructor() {
        this.orderBy = [];
    }

    addOrder(field:string,order:OrderDirection){
        this.orderBy.push(new OrderItem(field,order));
    }

    getOrder(){
        return this.orderBy;
    }
}

export class OrderItem{
    field:string;
    order:OrderDirection;

    constructor(field:string,order:OrderDirection){
        this.field = field;
        this.order=order;
    }
}

export enum OrderDirection {
    ASC = 'asc',
    DESC = 'desc',
}