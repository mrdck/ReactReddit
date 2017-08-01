import {
    FETCH_POST,
    FETCH_POST_FULLFILLED,
    FETCH_SUBREDDIT_REJECTED ,
    SET_SUBREDDIT ,
    FETCH_SUBREDDIT ,
    FETCH_SUBREDDIT_FULLFILLED ,
    SET_SUBREDDIT_FULLFILED
} from './types';




export const fetchSubreddit = subreddit => ({ type: FETCH_SUBREDDIT, payload: subreddit });

export const fetchSubredditFullfilled = payload => ({type:FETCH_SUBREDDIT_FULLFILLED , payload})

export const setSubreddit = subreddit => ({type:SET_SUBREDDIT, payload:subreddit});

export const setSubredditFullfilled = payload => ({type: SET_SUBREDDIT_FULLFILED , payload})

export const fetchSubredditReject = error => ({type:FETCH_SUBREDDIT_REJECTED , payload:error})

export const fetchPost = data => ({type: FETCH_POST , payload: data})

export const fetchPostFullfilled = payload => ({type: FETCH_POST_FULLFILLED , payload})

