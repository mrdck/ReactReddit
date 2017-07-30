import React from 'react';



const Input = props => {
    return(
        <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={(e) => props.onChangeUpdateTerm(e.target.value)} placeholder="subreddit"/>
            <button className="btn btn-default btn-styled" onClick={(e) => props.onSubmitFetchSubreddit()} >Submit</button>
        </form>

    )
}





export default Input;