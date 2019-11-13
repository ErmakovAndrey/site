import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">Главная</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/posts">Посты</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/albums">Фотоальбомы</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/users">Пользователи</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">О сайте</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}