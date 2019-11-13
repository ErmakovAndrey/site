import React, {Component} from 'react';
import Loading from './Loading';
import getdata from '../services/service';
import ImageZoom from 'react-medium-image-zoom';
import {Link} from 'react-router-dom';

export default class AlbumPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            photos: {},
            user: {},
            loading: true
        }
    }

    componentDidMount(){
        this.getPhotos();
        this.getUser();
    }

    getPhotos(){
        getdata(`/photos`)
        .then( (photos) => {
                this.setState({
                    photos: photos,
                    loading: false 
                });
            }
        )
    }

    getUser(){
        getdata(`/users/${this.props.match.params.userId}`)
        .then( (user) => {
                this.setState({
                    user: user,
                });
            }
        )
    }

    render(){
        let item = '';
        if (this.state.loading){
            item = <Loading/>
        }
        else{
            const photos = this.state.photos.filter( (elem) => elem.albumId == this.props.match.params.id);
            item = photos.map( (elem, key) => {
                let zoomImage = {
                    src: elem.url,
                    alt: this.props.match.params.title
                }
                return (
                 <div className="img col col-lg-2 col-6 text-center" key={key}>
                     <ImageZoom
                        image = {zoomImage}
                        zoomImage = {zoomImage}
                    />
                 </div>);
            })
        }
        return (
            <div className="user-page">
                <h1>{this.props.match.params.title}</h1>
                <p>Создатель: <Link to={`/users/${this.props.match.params.userId}`}>{this.state.user ? this.state.user.name : 'Пользователь не загружен'}</Link></p>

                <div className="row">
                    {item}
                </div>
            </div>
            
        )
    } 
}