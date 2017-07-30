import {FETCH_SUBREDDIT_REJECTED} from "../actions/types"

export default (state = "", action) => {
    switch (action.type) {
        case FETCH_SUBREDDIT_REJECTED:
            console.log(action)
            return action.payload;

        default:
            return state;
    }
};


