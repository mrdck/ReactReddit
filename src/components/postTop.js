import React from 'react';


const PostTop = props => {
    return(
        <div className="header post-header">
            <button className="btn btn-default">Go back</button>
            <h2>/r/{props.data.r}</h2>
            <h3>Up votes</h3>
        </div>
    )
}


export default PostTop;



