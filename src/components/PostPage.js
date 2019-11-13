import React, {Component} from 'react';
import Loading from './Loading';
import getdata from '../services/service';
import {Link} from 'react-router-dom';

export default class PostPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            post: {},
            comments: [],
            user: {},
            loading: true
        }
    }

    componentDidMount(){
        this.getPage();
        this.getComments();
    }

    getUser(){
        getdata(`/users/${this.state.post.userId}`)
        .then( (user) => {
                this.setState({
                    user: user
                });
            }
        )
    }

    getComments(){
        getdata(`/comments`)
        .then( (comments) => {
                this.setState({
                    comments: comments
                });
            }
        )
    }

    getPage(){
        getdata(`/posts/${this.props.match.params.id}`)
        .then( (post) => {
                this.setState({
                    post: post,
                    loading: false 
                });
                this.getUser();
            }
        )
    }

    render(){
        
        let item = '';
        if (this.state.loading){
            item = <Loading/>
        }
        else{
            item = <><h1>{this.state.post.title}</h1><div className="content">{this.state.post.body}</div></>
        }
        const comments = this.state.comments.filter( (elem) => 
            elem.postId == this.props.match.params.id
        );
        const commentWrap = comments.map( (elem, key) => 
            <div className="comment jumbotron" key={key}>
                <div className="comment-name"><strong>Имя:</strong> {elem.name}</div>
                <div className="comment-email"><strong>E-mail:</strong> {elem.email}</div>
                <div className="comment-body">{elem.body}</div>
            </div>
        )
        return (
            <div className="post-page">
                <p>Создатель: <Link to={`/users/${this.state.user ? this.state.user.id : ''}`}>{this.state.user ? this.state.user.name : 'Пользователь не загружен'}</Link></p>
                    {item}
                <div className="comments">
                    <h2>Комментарии</h2>
                    {commentWrap}
                </div>
            </div>
            
        )
    } 
}