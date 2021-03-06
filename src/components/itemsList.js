import React from 'react';

import Item from './item';


const ItemsList = props => {
    const renderItems = (e) => {

      return <Item onClickHandleAction={(e) => props.onClickHandle(e)} data={e.data} key={e.data.permalink}/>

    }
    return(
        <div className="container">
        {props.list.map(renderItems)}
        </div>
    )
}


export default ItemsList;