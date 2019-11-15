import React ,{Component}from 'react';
import {Provider,connect} from 'react-redux'
import store from './store/index'
import Header from './components/Header'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    console.log(this.props)
    return (    
      <div>
           {
          this.props.headerShow ?
            <Header></Header> : ''
        }
      </div>
     
      )
  }
}
 const mapStateToProps=(state)=>{
   return {
     headerShow: state.headerShow
   }
 }
const Homes=connect(mapStateToProps,null)(Home)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (   
      <Provider store={store}>
        <Homes/>
        {
          this.props.children
        }
      </Provider>
    );

 
  }
}

export default App;


