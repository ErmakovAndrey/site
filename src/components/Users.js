import React, {Component} from 'react';
import getdata from '../services/service';
import User from './User';
import Loading from './Loading';

export default class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            loading: true
        }
    }

    componentDidMount(){
        getdata('/users')
        .then( (users) => {
                this.setState({
                    users: users,
                    loading: false 
                })
            }
        )
    }

    render(){
        let items = '';
        if (this.state.loading){
            items = <Loading/>
        }
        else{
            items = this.state.users.map( (elem) => 
                <User key={elem.id} user={elem}/>
            )
        }
        
        return (
            <ul className="users">
                {items}
            </ul>
        )
    }
}