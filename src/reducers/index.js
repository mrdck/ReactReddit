import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import fetchSubreddit from './fetch_subreddit';
import fetchSubredditEpic from './fetch_subreddit_epic';
import 'rxjs';

export const rootEpic = combineEpics(
    fetchSubredditEpic
);


export const Reducer = combineReducers({
    fetchSubreddit
});


