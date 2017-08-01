import React , { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Content from '../content';
import {fetchPost} from "../../actions/index";
import CommentForm from '../commentForm';
import CommentList from '../commentList'

class View extends Component{

    componentDidMount(){
        this.props.fetchPost(this.props.match.params)
    }

    renderContent = () => {
        if(this.props.post && _.size(this.props.post) > 0){
            return <Content data={this.props.post[0].data.children[0].data}/>
        }else{
            return <img src="https://redux-observable.js.org/logo/logo-small.gif" />
        }
    }


    renderComments = () => {
        if(this.props.post && _.size(this.props.post) > 0){
            return ( <div>
            <CommentForm/>
            <CommentList data={this.props.post[1].data.children}/>
            </div>)
        }else{
            return " "
        }
    }


    render(){
        return(
        <div >
            <div className="content-section">
               {this.renderContent()}
            </div>
            <div className="comments-section">
                {this.renderComments()}

            </div>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchPost: data => dispatch(fetchPost(data))
    }
}

const mapStateToProps = state => {
    return{
        post: state.fetchPost
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(View);