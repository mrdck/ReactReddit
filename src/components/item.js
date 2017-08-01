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

        <div>
            <div className="media">
                <div className="media-left">
                    <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
                    <p> {props.data.ups} </p>
                 </div>

                <div className="media-body">
                    <Link to={`/${props.data.subreddit}/${props.data.id}`}  >  <h4 className="media-heading">{props.data.title}</h4>    </Link>
                    <p className="subbmited-by"> Submitted by {props.data.author} </p>
                </div>
                <div className="media-right">
                    <i className="fa fa-comment" aria-hidden="true">{props.data.num_comments}</i>
                </div>

            </div>
        </div>



    )
}



export default Item