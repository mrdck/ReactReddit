import React , { Component } from 'react';
import style from '../../style/main.scss';

//Components/Containers

import Header from './containers/header';
import Body from './containers/body';
class App extends Component{

  render(){
    return(
        <div>
            <Header />
            <Body />
        </div>
    )

  }

}


export default App



