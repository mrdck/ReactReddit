import React from 'react';
import CommentReply from './commentReply';

const CommentItem = props => {
    const renderReplies = () =>{
        if(props.data.replies && props.data.replies.data.children.length > 0){
            return props.data.replies.data.children.map((e) => {
                return <CommentReply key={e.data.id} data={e.data}/>
            })
        }else{
            return "";
        }
    }
    return(

        <div className="comment-item">
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
            {renderReplies()}
        </div>

    )
}


export default CommentItem;