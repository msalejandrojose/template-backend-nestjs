//TODO
export class Field {
    protected fields: string[];

    constructor(fields: string[]) {
        this.fields = fields;
    }

    addField(field:string){
        this.fields.push(field);
    }

    getFields(){
        return this.fields;
    }
}