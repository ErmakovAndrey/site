import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Album extends Component{
    render(){
        return(
            <div className="album col-lg-4 col-12 text-center">
                <Link to={`/albums/${this.props.album.id}/${this.props.album.userId}/${this.props.album.title}`}>
                    <p>{this.props.album.title}</p>
                    <img src={this.props.photos.length > 0 ? this.props.photos[0].thumbnailUrl : 'https://www.brokernautic.com/imgr/1-800-600/dni_0572.jpg'} alt={this.props.album.title}></img>
                </Link>
            </div>
        )
    }
}