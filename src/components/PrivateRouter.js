import React from 'react'
import auth from '../auth'
import { Route, Redirect } from 'react-router-dom'

class PrivateRouter extends React.Component{
    render(){
        console.log(this.props)
        let { component: Component, ...rest } = this.props
        return (
            <Route { ...rest } render={(props) => {
                console.log(props)
                let isLogin = sessionStorage.getItem('bossPlatform-isLogin')
                console.log(isLogin)
                return (auth.isAuth || isLogin) ? <Component {...props} /> :
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}/>
            }} />
        )
    }
}

export default PrivateRouter