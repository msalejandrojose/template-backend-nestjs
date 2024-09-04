export class Limit {
    protected limit: number;
    protected skip: number;

    constructor(limit: number, skip?: number) {
        this.limit = limit;
        this.skip = skip??0;
    }

    getLimit() {
        return this.limit;
    }

    getSkip() {
        return this.skip;
    }
}