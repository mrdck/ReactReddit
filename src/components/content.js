import React from 'react';

import LinkContent from './linkContent';
import SelfContent from './selfContent';
import VideoContent from './videoContent';
import ImageContent from './imageContent';
import TweetContent from './tweetContent';

const Content = props => {
    console.log(props.data)
    const renderBody = () => {
        if(props.data.post_hint === "rich:video"){
            return <VideoContent data={props.data.url}/>
        }else if(props.data.post_hint === "self"){
            return <SelfContent data={props.data.selftext}/>
        }else if(props.data.post_hint === "link"){
            return <LinkContent thumbnail={props.data.thumbnail} url={props.data.url} title={props.data.title}/>
        }else if(props.data.post_hint === "image"){
            return <ImageContent data={props.data.url}/>
        }else if(props.data.domain === "twitter.com"){
            return <TweetContent data={props.data.url}/>
        }else{
            return <SelfContent data={props.data.selftext}/>
        }
    }
    return(
        <div>
            <h1 className="text-center"> {props.data.title} </h1>

            {renderBody()}

        </div>
    )
}


export default Content