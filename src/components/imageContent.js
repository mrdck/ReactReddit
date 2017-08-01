import React from 'react';


const ImageContent = props => {
    return(
        <div>
            <img className="img-responsive" src={props.data} />
        </div>
    )
}



export default ImageContent;