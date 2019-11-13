import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return(
            <header className="jumbotron">
                <div className="container">
                    <h1 className="text-center">
                        <a href="/">Пример сайта на React</a>
                    </h1>
                </div>
            </header>
        )
    }
}