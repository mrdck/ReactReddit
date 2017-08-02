import React , { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Content from '../content';
import {fetchPost , addComment ,setCommentBody} from "../../actions/index";
import CommentList from '../commentList'
import PostTop from '../postTop';
import Loader from '../loader'

class View extends Component{

    componentDidMount(){
        this.props.fetchPost(this.props.match.params)
    }

    renderContent = () => {
        if(this.props.post && _.size(this.props.post) > 0){
            return <Content data={this.props.post[0].data.children[0].data}/>
        }else{
            return <Loader />
        }
    }

    handleAddComment = e => {
        this.props.addComment(e)
        setTimeout(() => {
            this.props.post[1].data.children.unshift(this.props.newComment)
            console.log(this.props.newComment)
            console.log(this.props.post[1].data.children)
            this.forceUpdate()
        }, 300)


    }

    renderComments = () => {
        if(this.props.post && _.size(this.props.post) > 0){
            return ( <div>
            <CommentList onChangeSetBody={(e) => this.props.setCommentBody(e)} commentBody={this.props.commentBody} onClickAddComment = {(e) => this.handleAddComment(e)} newest_comment={this.props.newComment} data={this.props.post[1].data.children}/>
            </div>)
        }else{
            return " "
        }
    }


    render(){
        return(
        <div>
            <PostTop data={this.props.match.params}/>
            <div className="content-section-container">
                <div className="content-section">
                   {this.renderContent()}
                </div>
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
        fetchPost: data => dispatch(fetchPost(data)),
        addComment: comment => dispatch(addComment(comment)),
        setCommentBody: body => dispatch(setCommentBody(body))

    }
}

const mapStateToProps = state => {
    return{
        post: state.fetchPost,
        newComment : state.addComment,
        commentBody: state.setCommentBody,

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(View);