import React , { Component } from 'react';
import { connect } from 'react-redux';




class Body extends Component{
    render(){
        return(
            <h1>
                Body
            </h1>
        )
    }
}





export default connect(null,null)(Body);