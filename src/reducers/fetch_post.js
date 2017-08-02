import {FETCH_POST_FULLFILLED} from "../actions/types"

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST_FULLFILLED:
            return action.payload

        default:
            return state;
    }
};


