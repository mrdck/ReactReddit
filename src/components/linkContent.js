import React from 'react';


const LinkContent = props => {
    return(
            <div className="media link-content">
                <div className="media-left media-link">
                    <a href="#">
                        <img className="media-object" src={props.thumbnail}/>
                    </a>
                </div>
                <div className="media-body">
                    <a href={props.url}><h4 className="media-heading">{props.title}</h4> </a>
                </div>
            </div>
    )
}


export default LinkContent;