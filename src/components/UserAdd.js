import React from 'react';

import uuid from 'uuid';

import { Prompt } from 'react-router-dom';

export default class UserAdd extends React.Component{
    state = {
        isPrompt: false,
        inputName: '',
        inputTel: ''
    }
    handleSubmit = (ev) => {
        let name = this.nameInput.value
        let tel = this.telInput.value
        let storageUser = localStorage.getItem('boosUserList')
        let userList = storageUser ? JSON.parse(storageUser) : []
        userList.push({
            id: uuid(),
            name,
            tel
        })
        localStorage.setItem('boosUserList', JSON.stringify(userList))
        this.nameInput.value = this.telInput.value = ''
        this.props.history.push('/user/list')
        ev.preventDefault()
    }
    watchQuery = (ev, type) => {
        if(type === 'name') {
            this.setState({
                inputName: ev.target.value
            })
        } else {
            this.setState({
                inputTel: ev.target.value
            })
        }
        setTimeout(() => {
            this.setState({
                isPrompt: (this.state.inputName || this.state.inputTel) ? true : false
            })
        }, 20)


    }
    render(){
        return (<div>
            <Prompt when={ this.state.isPrompt } message={ (location) => `确认要跳转到${ location.pathname }吗？` } />
            <form className="form" onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input type="text" ref={ input => this.nameInput = input } className="form-control" placeholder="请输入姓名" onChange={ (ev) => { this.watchQuery(ev, 'name') } } />
                </div>
                <div className="form-group">
                    <input type="number" ref={ input => this.telInput = input } className="form-control" placeholder="请输入电话" onChange={ (ev) => { this.watchQuery(ev, 'tel') } } />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">添加</button>
                </div>
            </form>
        </div>)
    }
}