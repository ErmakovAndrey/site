import React, {Component} from 'react';
import Loading from './Loading';
import getdata from '../services/service';
import Album from './Album';

export default class Albums extends Component{
    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            photos: [],
            loading: true
        }
    }   

    componentDidMount(){
        this.getPhotos();
        this.getAlbums();
    }

    getAlbums(){
        getdata('/albums')
        .then( (albums) => {
                this.setState({
                    albums: albums,
                    loading: false 
                })
            } 
        )
    }

    getPhotos(){
        getdata('/photos')
        .then( (photos) => {
                this.setState({
                    photos: photos,
                    loading: false 
                })
            } 
        )
    }

    photoFilter = (album) => {
        const photos = this.state.photos.filter( (elem) => elem.albumId === album.id);
        return photos;
    }

    render(){
        let items = '';
        if (this.state.loading){
            items = <Loading/>
        }
        else{
            items = this.state.albums.map( (elem) => 
                    <Album key={elem.id} album={elem} photos={this.photoFilter(elem)}/>
            )
        } 
        
        return (
            <div className="row">
                {items}
            </div>
        )
    }
}