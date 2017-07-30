import {SET_SUBREDDIT_FULLFILED} from "../actions/types"

export default (state = "", action) => {
    switch (action.type) {
        case SET_SUBREDDIT_FULLFILED:
            return action.payload
        default:
            return state;
    }
};


