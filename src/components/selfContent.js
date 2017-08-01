import React from 'react';


const SelfContent = props => {
    console.log(props)
    return(
        <div className="self -content">
            {props.data}
        </div>
    )
}


export default SelfContent;