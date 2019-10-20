import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Index from '../views/index'
import TodoList from '../components/Todolist'
import App from '../app';
import List from '../views/list'
import Mypage from '../views/mypage'
import NotFound from '../views/notfound'
import ReactHocks from '../views/ReactHocks/ReactHocks'

const AppRouter = ()=>{
  
  return (
    <Router>
       <App>
        <Switch>
          
          <Route path="/index"  render={(props)=>{
            return(
              <Index {...props}>
              <Switch>
                <Route path="/index/todolist" component={TodoList}/>
                <Route path="/index/reacthocks" component={ReactHocks}/>
              </Switch>
            </Index>
            )
          }
            
          }/>
          <Route path="/list/:listid" component={List}  />
          <Route path="/mypage" component={Mypage} />
          <Redirect from="/" to="/index/todolist"/>
          <Route  component={NotFound} />
          
        </Switch>
        {/* <Route path="/index/todolist" component={TodoList}/> */}
      </App>
    </Router>
  )
}
export default AppRouter