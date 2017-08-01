import React from 'react';


const CommentReply = props => {
    return(
        <div className="comment-item comment-item-reply">
            <div className="comment-username">
                <i>/u/{props.data.author}</i>
            </div>

            <div className="comment-date">
                {props.data.created}
            </div>
            <br/>
            <div className="comment-body">
                {props.data.body}
            </div>
            <div className="comments-votes">
                <i className="glyphicon glyphicon-arrow-up">{props.data.ups}</i>
                <i className="glyphicon glyphicon-arrow-down">{props.data.downs}</i>

            </div>
        </div>
    )
}




export default CommentReply