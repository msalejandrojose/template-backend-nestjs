//TODO
export class Limit {
    protected limit: number;

    constructor(limit: number) {
        this.limit = limit;
    }

    getLimit(){
        return this.limit;
    }
}