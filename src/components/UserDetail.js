import React from 'react';

export default class UserDetail extends React.Component{
    render(){
        console.log(this.props)
        let { id } = this.props.match.params
        let storageUser = localStorage.getItem('boosUserList')
        let userList = storageUser ? JSON.parse(storageUser) : []
        let detail = userList.find((item) => id === item.id)
        return (<table className="table">
            <thead>
                <tr>
                    <th>UID</th>
                    <th>名字</th>
                    <th>电话</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{ (detail.id).substr(-8) }</td>
                    <td>{ detail.name }</td>
                    <td>{ detail.tel }</td>
                </tr>
            </tbody>
        </table>)
    }
}