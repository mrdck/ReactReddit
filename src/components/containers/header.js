import React , { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSubreddit , setSubreddit} from '../../actions/index';


//Dumb components
import Input from '../input';



class Header extends Component{
    componentDidMount(){
        this.props.fetchSubreddit('all')
        this.props.setSubreddit('all')
    }
    onChangeUpdate = term =>{
        this.props.setSubreddit(term)
    }
    onSubmitFetch = () => {
        console.log(this.props)
        this.props.fetchSubreddit(this.props.currentSubreddit)
    }



    render(){
        return(
            <div className="header">
                <Input onSubmitFetchSubreddit = {this.onSubmitFetch} onChangeUpdateTerm={(e) => this.onChangeUpdate(e)}/>

            </div>
        )
    }
}




const mapDispatchToProps = dispatch =>{
    return {
        setSubreddit: term => dispatch(setSubreddit(term)),
        fetchSubreddit: term => dispatch(fetchSubreddit(term))
    }
}

const mapStateToProps = state => {
    return{
        currentSubreddit: state.setSubreddit
    }
}


export default connect(mapStateToProps ,mapDispatchToProps)(Header);