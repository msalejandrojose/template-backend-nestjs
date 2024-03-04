export class Field {
    protected fields: Array<string | number>;

    constructor(fields?: string[]) {
        this.fields = fields??[];
    }

    addField(field:string | number | string[]){
        if(Array.isArray(field)){
            this.fields.push(...field);
        }else{
            this.fields.push(field);
        }
    }

    getFields(){
        return this.fields;
    }
}