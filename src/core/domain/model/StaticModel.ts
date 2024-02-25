import { DynamicModel } from "./DynamicModel";

export class StaticModel<T> extends DynamicModel<T>{
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