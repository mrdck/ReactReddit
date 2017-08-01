import { FETCH_MORE_POSTS } from "../actions/types"
import  {fetchMorePostsFullfilled , fetchSubredditReject} from "../actions/index";
import  { Observable } from 'rxjs/Rx'
import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';




const fetchSubredditEpic = action$ =>
    action$.ofType(FETCH_MORE_POSTS)
        .mergeMap(action =>
            ajax.getJSON(`https://www.reddit.com/r/${action.payload.r}/hot.json?count=${action.payload.count}&after=${action.payload.after}` )
                .map(response => fetchMorePostsFullfilled(response))
                .catch(error => Observable.of(
                    fetchSubredditReject(error.xhr.response)
                ))


        );


export default fetchSubredditEpic