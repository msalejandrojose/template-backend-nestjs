import * as process from "process";
import {getEnv as getEnvLocal} from "./environment.local";

export const getEnv = () => {
    return getEnvLocal();
    if(process.env.ENV!=="local"){
        return getEnvLocal();
    }else{
        return getEnvLocal();
    }
}
