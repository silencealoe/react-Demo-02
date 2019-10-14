import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changeHeaderShow} from '../store/actionCreator'
class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentWillMount(){
    this.props.changeHeaderShow(false)
  }
  componentWillUnmount(){
    this.props.changeHeaderShow(true)
  }
  render() { 
    return (  
      <h2>notfound</h2>
    );
  }
}
 const mapDispatchToProps=(dispatch)=>{
   return{
     changeHeaderShow(val){
       const action = changeHeaderShow(val)
       dispatch(action)

     }
     
   }
 }
export default connect(null,mapDispatchToProps)(NotFound);