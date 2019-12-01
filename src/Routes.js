import {Switch,Route} from 'react-router-dom'
import React from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
// import Payment from './components/Payment'
import Admin from './components/Admin'
import Login from './components/Login'
import PrivateRoute from 'react-private-route'

export default (

    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/Auth' component={Auth}/>
        {/* <Route path='/Payment' component={Payment}/> */}
        <Route path='/Admin' component={Admin}/>
        {/* <PrivateRoute path='/Admin' component={Admin} isAdmin/> */}
        <Route path='/Login' component={Login}/>
    </Switch>
)