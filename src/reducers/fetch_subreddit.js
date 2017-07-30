import {FETCH_SUBREDDIT_FULLFILLED } from "../actions/types"

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_SUBREDDIT_FULLFILLED:


            state.splice(0 , state.length)
            return [...action.payload.data.children]

        default:
            return state;
    }
};


