import React from 'react';

import { Link } from 'react-router-dom';

export default class UserList extends React.Component{
    state = {
        userList: []
    }
    componentWillMount() {
        let storageUser = localStorage.getItem('boosUserList')
        let userList = storageUser ? JSON.parse(storageUser) : []
        this.setState({
            userList
        })
    }
    render(){
        return (<ul className="list-group">
            {
                this.state.userList.map((item, index) =>
                    <li className="list-group-item" key={ item.id }>
                        <Link to={`/user/detail/${ item.id }`}>{ item.name }</Link>
                    </li>
                )
            }
        </ul>)
    }
}