import React from 'react';

import {
    BrowserRouter,
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom';

import Home from './Home'
import User from './User'
import Profile from './Profile'
import Login from './Login'
import PrivateRouter from './PrivateRouter';
import TipButton from './TipButton';
import NotFound from './NotFound';


export default (
    <BrowserRouter>
        <div>
            <div className="full-container">
                <div className="container">
                    <TipButton />
                </div>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="col-4">
                        <div className="navbar-brand">用户管理系统</div>
                    </div>
                    <div className="col-8">
                        <ul className="navbar-nav flex-row">
                            <li className="mx-3">
                                <NavLink className="nav-link" to="/home">首页</NavLink>
                            </li>
                            <li className="mx-3">
                                <NavLink className="nav-link" to="/user">学员管理</NavLink>
                            </li>
                            <li className="mx-3">
                                <NavLink className="nav-link" to="/profile">个人设置</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="container mt-3">
                <Switch>
                    <Route path="/home" component={ Home } />
                    <Route path="/user" component={ User } />
                    <Route path="/login" component={ Login } />
                    <PrivateRouter path="/profile" component={ Profile }></PrivateRouter>
                    <Redirect exact path="/" to="/home" />
                    <Route component={ NotFound } />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
)