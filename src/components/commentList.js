import React from 'react';
import CommentItem from './commentItem';
import CommentForm from './commentForm';
const CommentList = props => {



    const renderComment = (e) => {
        return <CommentItem data={e.data} key={e.data.id} />
    }

    return(<div>
            <CommentForm onChangeSetCommentBody={e => props.onChangeSetBody(e)} commentBody={props.commentBody} onSubmitAddPost = {(e) => props.onClickAddComment(e)}/>

        <div className="comments-container">
            {props.data.map(renderComment)}
        </div>
        </div>
    )
}


export default CommentList;