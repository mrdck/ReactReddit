import {ADD_COMMENT} from "../actions/types"

export default (state = {} , action) => {
    switch(action.type){
        case ADD_COMMENT:
            console.log(action.payload)
            return action.payload
    }
    return state;
}