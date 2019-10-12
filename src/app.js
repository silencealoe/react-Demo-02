import React ,{Component}from 'react';
import {Provider} from 'react-redux'
import Index from './views/index'
import store from './store/index'
import Header from './components/Header'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (   
    <Provider store={store}>
      <Header></Header>
        {
          this.props.children
        }
    </Provider> );
  }
}
 
export default App;

