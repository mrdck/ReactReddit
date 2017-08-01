import {FETCH_MORE_POSTS_FULLFILLED} from "../actions/types"

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MORE_POSTS_FULLFILLED:

            console.log(action.payload)
            state.splice(0 , state.length)
            return [...action.payload.data.children];

        default:
            return state;
    }
};


