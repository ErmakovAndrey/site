import React, {Component} from 'react';
import Post from './Post';
import Loading from './Loading';
import getdata from '../services/service';

export default class Posts extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            users: [],
            loading: true
        }
    }     
    
    componentDidMount(){
        this.setUsers();
        this.setPosts();
    }

    setPosts = () => {
        getdata('/posts')
        .then( (posts) => {
                this.setState({
                    posts: posts,
                    loading: false 
                })
            } 
        )
    }

    setUsers = () => {
        getdata('/users')
        .then( (users) => {
                this.setState({
                    users: users,
                    loading: false
                })
            }
        )
    }

    userFilter = (post) => {
        const user = this.state.users.filter( (elem) => elem.id === post.userId);
        return user[0];
    }

    render(){
        let items = '';
        if (this.state.loading){
            items = <Loading/>
        }
        else{
            items = this.state.posts.map( (elem) => 
                    <Post key={elem.id} post={elem} user={this.userFilter(elem)}/>
            )
        }
        
        return (
            <div className="row">
                {items}
            </div>
        )
    }
}