import {SET_SUBREDDIT } from "../actions/types"
import  {setSubredditFullfilled} from "../actions/index";
import 'rxjs';

const setSubredditEpic= action$ =>
    action$.ofType(SET_SUBREDDIT)
        .map(action => setSubredditFullfilled(action.payload));


export default setSubredditEpic
