import React from 'react';


const CommentForm = props => {
    return(
        <div className="comment-form-wrapper">
            <form className="comment-form" onSubmit={(e) => e.preventDefault()}>
                <textarea></textarea>
                <button className="btn btn-default ">Submit</button>
            </form>
        </div>
    )
}




export default CommentForm