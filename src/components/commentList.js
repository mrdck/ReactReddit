import React from 'react';
import CommentItem from './commentItem';

const CommentList = props => {
    console.log(props)
    const renderComment = (e) => {
        return <CommentItem data={e.data} key={e.data.id} />
    }

    return(
        <div className="comments-container">
            {props.data.map(renderComment)}
        </div>
    )
}


export default CommentList;