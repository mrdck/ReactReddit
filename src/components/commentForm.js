import React from 'react';


const CommentForm = props => {

    return(
        <div>
        <div className="comment-form-wrapper">
            <form className="comment-form" onSubmit={(e) => e.preventDefault()}>
                <textarea onChange={e =>  props.onChangeSetCommentBody(e.target.value)}></textarea>
                <button onClick={(e) => props.onSubmitAddPost({data: { body:props.commentBody,  author: 'TEST_ENDPOINT' , id: Math.floor(Math.random() * 10000000 + Math.random() * 100 )}})} className="btn btn-default ">Submit</button>
            </form>
        </div>

        </div>

    )
}




export default CommentForm