import React from 'react'
import auth from '../auth'
import { withRouter } from 'react-router-dom'

export default withRouter((props) => {
    console.log(props)
    let { history } = props
    let isLogin = sessionStorage.getItem('bossPlatform-isLogin')
    let logout = () => {
        auth.logout(() => {
            sessionStorage.removeItem('bossPlatform-isLogin')
            history.push('/home')
        })
    }
    return (auth.isAuth || isLogin) ?
        <p className="text-center mt-2">
            欢迎管理员回来!
            <button className="btn btn-link" onClick={ logout }>退出登录</button>
        </p> :
        <p className="text-center mt-2">您未登录，只能访问部分页面!</p>
})
