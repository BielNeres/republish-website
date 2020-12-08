import React from 'react'

import { Router, Switch, Route } from 'react-router'

import Login from '../pages/login'
import Register_republic_2 from '../pages/register/republic/register_republic_2'
import Register_republic_3 from '../pages/register/republic/register_republic_3'
import Register_login from '../pages/register/user/register_user'
import picture_doc from '../pages/register/global/picture_doc_request'
import picture_perfil from '../pages/register/global/picture_perfil_request'
import description from '../pages/register/global/description'
import picture_doc2 from '../pages/register/global/picture_doc_request2'
import picture_perfil2 from '../pages/register/global/picture_perfil_request2'
import description2 from '../pages/register/global/description2'
import index from '../pages/index/index'
import index_choose_register from '../pages/index/index_choose_register'
import index_choose_login from '../pages/index/index_choose_login'
import favorites from '../pages/home/favorites'
import Home from '../pages/home/home'
import republic_description from '../pages/home/republic_description'
import messages from '../pages/home/messages'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'

import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <Route component={Register_republic_2} exact path="/register/republic/step/1"/>
            <Route component={Register_republic_3} exact path="/register/republic/step/2"/>
            <Route component={Register_login} exact path="/register/user"/>
            <Route component={picture_doc} exact path="/register/user/picture/doc"/>
            <Route component={picture_perfil} exact path="/register/user/picture/perfil"/>
            <Route component={description} exact path="/register/user/description"/>
            <Route component={picture_doc2} exact path="/register/republic/picture/doc"/>
            <Route component={picture_perfil2} exact path="/register/republic/picture/perfil"/>
            <Route component={description2} exact path="/register/republic/description"/>
            <Route component={index} exact path="/"/>
            <Route component={index_choose_register} exact path="/choose/register"/>
            <Route component={index_choose_login} exact path="/choose/login"/>
            <PrivateRoute component={Home} exact path="/home"/>
            <Route component={favorites} exact path="/favorites"/>
            <Route component={republic_description} exact path="/republic/description"/>
            <Route component={messages} exact path="/messages"/>
            <PrivateRoute component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes
