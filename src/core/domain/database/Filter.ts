export class Filter {
    operator: FilterOperator;
    filter: Condition[];

    constructor(operator?: FilterOperator) {
        this.operator = operator ?? FilterOperator.AND;
        this.filter = [];
    }

    addEqualValue(column:string,value:string | number) {
        this.filter.push(new Condition(column,value,ConditionOperator.EQUAL));
    }

    addUnEqualValue(column:string,value:string | number) {
        this.filter.push(new Condition(column,value,ConditionOperator.UNEQUAL));
    }
}

export enum FilterOperator {
    AND = 'AND',
    OR = 'OR',
}

export class Condition {
    column: string;
    value: string | number;
    operator: ConditionOperator;

    constructor(column: string, value: string | number, operator: ConditionOperator){
        this.column = column;
        this.value = value;
        this.operator = operator;
    }
}

export enum ConditionOperator{
    EQUAL = '=',
    UNEQUAL = '!=',
    IN = 'in',
    LIKE = 'like'
}