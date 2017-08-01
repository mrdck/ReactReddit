import React from 'react';


const CommentForm = props => {




    return(
        <div>
        <div className="comment-form-wrapper">
            <form className="comment-form" onSubmit={(e) => e.preventDefault()}>
                <textarea onChange={e => console.log(e.target.value) }></textarea>
                <button onClick = {(e) => addComment("asdasdas") } className="btn btn-default ">Submit</button>
            </form>
        </div>

        </div>

    )
}




export default CommentForm