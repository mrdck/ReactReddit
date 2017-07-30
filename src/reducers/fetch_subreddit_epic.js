import { FETCH_SUBREDDIT} from "../actions/types"
import  {fetchSubredditFullfilled , fetchSubredditReject} from "../actions/index";
import  { Observable } from 'rxjs/Rx'
import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';




const fetchSubredditEpic = action$ =>
    action$.ofType(FETCH_SUBREDDIT)
        .mergeMap(action =>
            ajax.getJSON(`https://www.reddit.com/r/${action.payload}.json` )
                .map(response => fetchSubredditFullfilled(response))
                .catch(error => Observable.of(
                    fetchSubredditReject(error.xhr.response)
                ))


        );


export default fetchSubredditEpic