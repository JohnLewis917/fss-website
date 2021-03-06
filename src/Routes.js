import {Switch,Route} from 'react-router-dom'
import React from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import Admin from './components/Admin'
import Login from './components/Login'
import Stripe from './components/Stripe'
import AddEvent from './components/AddEvent'

export default (

    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/Auth' component={Auth}/>
        <Route path='/Payment' component={Stripe}/>
        <Route path='/Admin' component={Admin}/>
        <Route path='/Login' component={Login}/>
        
    </Switch>
)