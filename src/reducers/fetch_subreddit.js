import {FETCH_SUBREDDIT_FULLFILLED , FETCH_SUBREDDIT_REJECTED} from "../actions/types"

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_SUBREDDIT_FULLFILLED:

            console.log(action.payload)
            state.splice(0 , state.length)
            return [...action.payload.data.children];

        default:
            return state;
    }
};


