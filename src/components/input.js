import React from 'react';



const Input = props => {
    console.log(props)
    return(

        <input onChange={(e) => props.onChangeUpdateTerm(e.target.value)} />

    )
}





export default Input;