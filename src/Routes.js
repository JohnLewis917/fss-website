import {HashRouter,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import Payment from './components/Payment'
import Admin from './components/Admin'


 <Route exact path='/' component={Dashboard}/>
 <Route path='/Auth' component={Auth}/>
 <Route path='/Payment' component={Payment}/>
 <Route path='/Admin' component={Admin}/>