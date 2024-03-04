export class Filter {
    operator: FilterOperator;
    conditions: Condition[];
    filters: Filter[];

    constructor(operator?: FilterOperator) {
        this.operator = operator ?? FilterOperator.AND;
        this.conditions = [];
        this.filters = [];
    }

    addEqualValue(column: string, value: string | number) {
        this.conditions.push(new Condition(column, value, ConditionOperator.EQUAL));
    }

    addUnEqualValue(column: string, value: string | number) {
        this.conditions.push(new Condition(column, value, ConditionOperator.UNEQUAL));
    }

    addIn(column: string, values: Array<string | number>) {
        this.conditions.push(new Condition(column, values, ConditionOperator.IN));
    }

    addNotIn(column: string, values: Array<string | number>) {
        this.conditions.push(new Condition(column, values, ConditionOperator.NOT_IN));
    }

    addNull(column: string) {
        this.conditions.push(new Condition(column, 'NULL', ConditionOperator.IS));
    }

    addNotNull(column: string) {
        this.conditions.push(new Condition(column, 'NULL', ConditionOperator.IS_NOT));
    }

    addLessThan(column: string, value: string | number) {
        this.conditions.push(new Condition(column, value, ConditionOperator.LESS_THAN));
    }

    addGreaterThan(column: string, value: string | number) {
        this.conditions.push(new Condition(column, value, ConditionOperator.GREATER_THAN));
    }

    addLessThanOrEqual(column: string, value: string | number) {
        this.conditions.push(new Condition(column, value, ConditionOperator.LESS_THAN_OR_EQUAL));
    }

    addGreaterThanOrEqual(column: string, value: string | number) {
        this.conditions.push(new Condition(column, value, ConditionOperator.GREATER_THAN_OR_EQUAL));
    }

    addLike(column: string, pattern: string) {
        this.conditions.push(new Condition(column, pattern, ConditionOperator.LIKE));
    }

}

export enum FilterOperator {
    AND = 'AND',
    OR = 'OR',
}

export class Condition {
    column: string;
    value: string | number | Array<string | number>;
    operator: ConditionOperator;

    constructor(column: string, value: string | number | Array<string | number>, operator: ConditionOperator) {
        this.column = column;
        this.value = value;
        this.operator = operator;
    }
}

export enum ConditionOperator {
    IS = 'is',
    EQUAL = '=',
    UNEQUAL = '!=',
    IN = 'in',
    NOT_IN = 'not in',
    LIKE = 'like',
    IS_NOT = 'is not',
    LESS_THAN = '<',
    GREATER_THAN = '>',
    LESS_THAN_OR_EQUAL = '<=',
    GREATER_THAN_OR_EQUAL = '>=',
}