import React from 'react';


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
                        <img className="media-object" src={checkImg()}/>

                </div>

                <div className="media-body">
                    <h4 className="media-heading">{props.data.title}</h4>

                </div>
            </div>
        </div>


    )
}



export default Item