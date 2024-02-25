//TODO
export class Order {
    column: string;
    direction: OrderDirection;

    constructor(column: string, direction: OrderDirection = OrderDirection.ASC) {
        this.column = column;
        this.direction = direction;
    }
}

export enum OrderDirection {
    ASC = 'asc',
    DESC = 'desc',
}