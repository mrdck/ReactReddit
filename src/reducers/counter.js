import {COUNTER} from "../actions/types"


export default (state=0 , action) =>{
    switch(action.type){
        case COUNTER:
            return state + action.payload
    }
    return state
}

