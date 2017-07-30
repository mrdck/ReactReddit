import React , { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSubreddit} from '../../actions/index';
import _ from 'lodash';

//Dumb components
import Input from '../input';



class Header extends Component{
    onChangeUpdate = (term) =>{
            this.props.fetchSubreddit('webdev');
    }



    render(){
        return(
            <div className="header">
                <Input onChangeUpdateTerm={(e) => this.onChangeUpdate(e)}/>
            </div>
        )
    }
}




const mapDispatchToProps = dispatch =>{
    return {
        fetchSubreddit: term => dispatch(fetchSubreddit(term))
    }
}

const mapStateToProps = state => {
    return{

    }
}


export default connect(mapDispatchToProps ,mapDispatchToProps)(Header);