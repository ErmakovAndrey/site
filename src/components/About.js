import React, {Component} from 'react';

export default class About extends Component{
    render(){
        return(
            <>
            <h1>О сайте</h1>
            <p>Данный сайт создан на основе JSON сервера http://jsonplaceholder.typicode.com/. Из базы были взяты Posts, Comments, Albums и Users с их взаимосвязями, благодаря заимосвязям есть возможность, например, получать пользователя создателя поста или комментарии.</p>
            <p>Код написан 11.2019, в дальнейшем возможно код будет дописываться для расширения функционала</p>
            <p>Дизайну и стилистической верстке уделялось мало внимания, т.к. это было в данной задаче не важно. Для простоты подключен css Bootstrap 4.</p>
            </>
        )
    }
}