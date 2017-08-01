import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import fetchSubreddit from './fetch_subreddit';
import fetchSubredditEpic from './fetch_subreddit_epic';
import setSubredditEpic from './set_subreddit_epic';
import setSubreddit from './set_subreddit';
import fetchSubredditReject from './fetch_subreddit_reject';
import fetchPostEpic from './fetch_post_epic';
import fetchPost from './fetch_post';
import 'rxjs';

export const rootEpic = combineEpics(
    fetchSubredditEpic,
    setSubredditEpic,
    fetchPostEpic

);


export const Reducer = combineReducers({
    fetchSubreddit,
    setSubreddit,
    fetchSubredditReject,
    fetchPost

});


