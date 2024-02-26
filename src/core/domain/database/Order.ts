//TODO
export class Order {
    field: string;
    order: OrderDirection;

    constructor(field: string, order: OrderDirection = OrderDirection.ASC) {
        this.field = field;
        this.order = order;
    }
}

export enum OrderDirection {
    ASC = 'asc',
    DESC = 'desc',
}