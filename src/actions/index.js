import { CURRENT_SUBREDDIT , SET_SUBREDDIT , FETCH_SUBREDDIT , FETCH_SUBREDDIT_FULLFILLED } from './types';




export const fetchSubreddit = subreddit => ({ type: FETCH_SUBREDDIT, payload: subreddit });

export const fetchSubredditFullfilled = payload => ({type:FETCH_SUBREDDIT_FULLFILLED , payload})



