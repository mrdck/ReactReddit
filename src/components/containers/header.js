import React , { Component } from 'react';
import { connect } from 'react-redux';

//Dumb components
import Input from '../input';



class Header extends Component{
    render(){
        return(
            <div className="header">
                <Input/>
            </div>
        )
    }
}





export default connect(null,null)(Header);