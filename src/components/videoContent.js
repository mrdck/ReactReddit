import React from 'react';


const VideoContent = props =>{
    const renderEmbed = () => {
        const embed = props.data.split("=");
        return `http://www.youtube.com/embed/${embed[1]}`
    }
    return(
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" id="ytplayer" type="text/html" width="640" height="360"
                    src={renderEmbed()}
                    frameBorder="0"/>
        </div>
    )
}

export default VideoContent;
