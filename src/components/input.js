import React from 'react';



const Input = props => {
    return(
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="search-container">
        <input onChange={(e) => props.onChangeUpdateTerm(e.target.value)} placeholder="subreddit"/>
                <button onClick={(e) => props.onSubmitFetchSubreddit()} >Submit</button>
            </div>
        </form>

    )
}





export default Input;