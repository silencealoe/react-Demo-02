import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Index from '../views/index'
// import TodoList from '../components/Todolist'
import App from '../app';

const AppRouter = ()=>{
  return (
    <Router>
       <App>
        <Route path="/index"  component={Index}/>
        <Route path="/" exact/>
        <Route path="/list"/>
        <Route path="/my"/>
        {/* <Route path="/index/todolist" component={TodoList}/> */}
      </App>
    </Router>
  )
}
export default AppRouter