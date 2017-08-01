import { FETCH_POST} from "../actions/types"
import {fetchPostFullfilled} from "../actions/index";
import  { Observable } from 'rxjs/Rx'
import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';




const fetchPostEpic = action$ =>
    action$.ofType(FETCH_POST)
        .mergeMap(action =>
            ajax.getJSON(`https://www.reddit.com/r/${action.payload.r}/comments/${action.payload.id}.json` )
                .map(response => fetchPostFullfilled(response))



        );


export default fetchPostEpic