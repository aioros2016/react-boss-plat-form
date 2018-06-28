import React from 'react'
import auth from '../auth'
import { Redirect } from 'react-router-dom'

class Login extends React.Component{
    state = {
        isRedirectBack: false
    }
    login = () => {
        auth.authLogin(() => {
            this.setState({
                isRedirectBack: true
            })
            sessionStorage.setItem('bossPlatform-isLogin', 'true')
        })
    }
    render(){
        console.log(this.props)
        let { from } = this.props.location.state || { from: { pathname: '/' } }
        console.log(from)
        let { isRedirectBack } = this.state
        if(isRedirectBack) {
            return <Redirect to={ from } />
        }
        return (<div>
            <h3>请您登录!</h3>
            <button className="btn btn-primary" onClick={ this.login }>登录</button>
        </div>)
    }
}

export default Login;