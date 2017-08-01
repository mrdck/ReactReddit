import React from 'react';


const CommentForm = props => {
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <textarea></textarea>
            <button className="btn btn-default ">Submit</button>
        </form>
    )
}




export default CommentForm