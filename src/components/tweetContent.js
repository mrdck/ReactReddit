import React from 'react';
import TweetEmbed from 'react-tweet-embed'


const TweetContent = props => {
    const getId = () => {
       const url = props.data.split('status/')
       return url[1]
    }
    return(

        <div className="tweet-container">
            <TweetEmbed id={getId()}></TweetEmbed>
        </div>
    )
}


export default TweetContent;