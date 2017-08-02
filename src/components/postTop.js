import React from 'react';
import { Link } from 'react-router-dom';

const PostTop = props => {
    return(
        <div className="header post-header">
            <Link to={"/"} className="btn btn-default btn-styled">Go back</Link>
            <h2>/r/{props.data.r}</h2>
            <h3>Up votes</h3>
        </div>
    )
}


export default PostTop;



