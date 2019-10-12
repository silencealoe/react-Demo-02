import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Index from '../views/index'
import App from '../app';

const AppRouter = ()=>{
  return (
    <Router>
       <App>
        <Route path="/index"  component={Index}/>
        <Route path="/" exact/>
        <Route path="/list"/>
        <Route path="/my"/>
      </App>
    </Router>
  )
}
export default AppRouter