import React, {Component} from 'react';
import Loading from './Loading';
import getdata from '../services/service';

export default class Userpage extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: {},
            loading: true
        }
    }

    componentDidMount(){
        getdata(`/users/${this.props.match.params.id}`)
        .then( (user) => {
                this.setState({
                    user: user,
                    loading: false 
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
            item = (
            <>
            <h1>
                {this.state.user.name}
            </h1>
            <div className="item d-flex"><label>Логин</label>: {this.state.user.username}</div>
            <div className="item d-flex"><label>E-mail</label>: {this.state.user.email}</div>
            <div className="item d-flex"><label>Телефон</label>: {this.state.user.phone}</div>
            <div className="item d-flex"><label>Сайт</label>: {this.state.user.website}</div>
            <h3>Адрес</h3>
            <div className="item d-flex"><label>Улица</label>: {this.state.user.address.street}</div>
            <div className="item d-flex"><label>Дом</label>: {this.state.user.address.suite}</div>
            <div className="item d-flex"><label>Город</label>: {this.state.user.address.city}</div>
            <div className="item d-flex"><label>Почтовый индекс</label>: {this.state.user.address.zipcode}</div>
            <div className="item d-flex"><label>Координаты</label>: {this.state.user.address.geo.lat}, {this.state.user.address.geo.lng}</div>
            <hr></hr>
            <h3>Компания</h3>
            <div className="item d-flex"><label>Название</label>: {this.state.user.company.name}</div>
            <div className="item d-flex"><label>Сфера деятельности</label>: {this.state.user.company.catchPhrase}</div>
            <div className="item d-flex"><label>BS</label>: {this.state.user.company.bs}</div>
            <hr></hr>
            </>)
        }

        return (
            <div className="user-page">
                {item}
            </div>
            
        )
    } 
}