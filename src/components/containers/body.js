import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubreddit , fetchMorePosts , counter } from '../../actions/index';
import ItemsList from '../itemsList';
import Loader from '../loader'


class Body extends Component{

    loadMore = () => {
        this.props.addToCounter(25)
        setTimeout(() => {
            let after = this.props.subreddit[this.props.subreddit.length - 1].data.name;
            console.log(this.props.counter)
            this.props.fetchMorePosts({after: after , r: this.props.currentSubreddit , count: this.props.counter})
        } , 100)
    }


    displayMore = () => {
        if(this.props.more_posts && this.props.more_posts.length > 0){
            this.props.subreddit.push(...this.props.more_posts)

        }else{
          return ""
        }
    }

    renderList = () => {
        if(this.props.subreddit && this.props.subreddit.length > 0){
            return ( <div><ItemsList list={this.props.subreddit}/>
                <div className="btn-wrapper">
                    <button className="btn btn-lg btn-default" onClick={this.loadMore}>Load more</button>
                </div>
            </div>)

        }else if (this.props.error === null){
            return 'error'
        }else{
            return <Loader />
        }
    }

    render(){
        return(
            <div>
                {this.renderList()}
                {this.displayMore()}
            </div>

        )
    }
}



const mapStateToProps = state => {
    return{
        subreddit: state.fetchSubreddit,
        error: state.fetchSubredditReject,
        more_posts: state.fetchMorePosts,
        currentSubreddit: state.setSubreddit,
        counter: state.counter,

    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchSubreddit:subreddit => dispatch(fetchSubreddit(subreddit)),
        fetchMorePosts: data => dispatch(fetchMorePosts(data)),
        addToCounter: num => dispatch(counter(num)),


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Body);