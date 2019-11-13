import React, { Component } from 'react';
import {changeHeaderShow} from '@/store/actionCreator'
import {connect} from 'react-redux'
// query传参刷新，参数会丢失
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentWillMount(){
    this.props.headerShow(false)
  }
  componentWillUnmount(){
    this.props.headerShow(true)
  }
  
  render() { 
    return (
      <>
        <h2>detail</h2>
        {/* <p>{this.props.location.query.id}</p>   */}
        {/* <p>{this.props.match.params.id}</p> */}
        <p>{this.props.location.state.id}</p>
        {/* <p>{this.props.location.search}</p> */}
      </> 
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    headerShow(val){
      const action = changeHeaderShow(val)
      dispatch(action)
    }
  }
}
 
export default connect(null,mapDispatchToProps)(Detail);