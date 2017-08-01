import React from 'react';
import {Link} from 'react-router-dom';

const Item = props => {
    const checkImg = ()=>{
        if(props.data.thumbnail === 'self') {
            return "https://www.openprocessing.org/assets/thumbnails/visualThumbnail11740.jpg"
        }else{
            return props.data.thumbnail
            }
        }


    return (
        <Link to={`/${props.data.subreddit}/${props.data.id}`}  >
        <div>
            <div className="media">
                <div className="media-left">
                        <img className="media-object" src={checkImg()}/>

                </div>

                <div className="media-body">
                    <h4 className="media-heading">{props.data.title}</h4>

                </div>
            </div>
        </div>
        </Link>


    )
}



export default Item