import {FETCH_SUBREDDIT_FULLFILLED , FETCH_SUBREDDIT} from "../actions/types"
import  {fetchSubredditFullfilled} from "../actions/index";
import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';




const fetchSubredditEpic = action$ =>
    action$.ofType(FETCH_SUBREDDIT)
        .mergeMap(action =>
            ajax.getJSON(`https://www.reddit.com/r/${action.payload}.json` )
                .map(response => fetchSubredditFullfilled(response))
        );


export default fetchSubredditEpic