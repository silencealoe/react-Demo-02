import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changeHeaderKey} from '../store/actionCreator'

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentWillMount(){
    this.props.changeKey()
  }
  render() { 
    return ( 
      <h2>mypage</h2>
     );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    changeKey(){
      const action=changeHeaderKey(3)
      dispatch(action)
    }
  }
}
 
export default connect(null,mapDispatchToProps)(Mypage);