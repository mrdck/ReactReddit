import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSubreddit } from '../../actions/index';
import ItemsList from '../itemsList';


class Body extends Component{
    componentDidMount(){
        console.log(this.props)
    }


    renderList = () => {
        if(this.props.subreddit.length > 0){
            return <ItemsList list={this.props.subreddit}/>
        }else if (this.props.error === null){
            return 'error'
        }else{
            return 'loading'
        }
    }

    render(){
        return(
            <div>
                {this.renderList()}
            </div>

        )
    }
}



const mapStateToProps = state => {
    return{
        subreddit: state.fetchSubreddit,
        error: state.fetchSubredditReject
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchSubreddit:subreddit => dispatch(fetchSubreddit(subreddit))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Body);