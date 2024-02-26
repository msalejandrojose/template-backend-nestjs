export class Field {
    protected fields: string[];

    constructor(fields?: string[]) {
        this.fields = fields??[];
    }

    addField(field:string | string[]){
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