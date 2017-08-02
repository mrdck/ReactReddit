import {COMMENT_BODY} from "../actions/types"

export default (state = "" , action ) => {
    switch(action.type) {
        case COMMENT_BODY:
            return action.payload
    }
    return state;
}