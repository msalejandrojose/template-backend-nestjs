import { DynamicModel } from "./DynamicModel";

export class StaticModel extends DynamicModel{
    constructor(){
        super('id','s');
    }

    addData():Object[]{
        return [
            {id:'1',name:'static'},
            {id:'2',name:'static2'},
            {id:'3',name:'static3'},
        ];
    }
}