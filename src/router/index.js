import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Index from '../views/index'
import TodoList from '../components/Todolist'
import App from '../app';
import List from '../views/list'
import Status from '../views/status'
import NotFound from '../views/notfound'
import ReactHocks from '../views/ReactHocks/ReactHocks'
import Detail from '../views/detail';
import BaiduMap from '../views/baiduMap'
import Login from '../views/account/login'

const AppRouter = ()=>{
  
  return (
    <Router>
       <App>
        <Switch>
          
          <Route path="/index"  render={(props)=>{
            return(
              <Index {...props}>
              <Switch>
                <Route path="/index/todolist" component={TodoList} exact/>
                <Route path="/index/reacthocks" component={ReactHocks}/>
                <Route path="/index/map" component={BaiduMap}/>
                <Redirect from="/index" to="/index/todolist"/>
              </Switch>
            </Index>
            )
          }
            
          }/>
          <Route path="/list/:listid" component={List}  />
          <Route path="/status" component={Status} />
          <Route path="/detail" component={Detail} />
          <Route path="/account/login" component={Login} />

          <Redirect from="/" to="/index/todolist" exact/>
          <Route  component={NotFound} />
          
        </Switch>
        {/* <Route path="/index/todolist" component={TodoList}/> */}
      </App>
    </Router>
  )
}
export default AppRouter