import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changeHeaderKey} from '../store/actionCreator'
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:''
    }
  }
  componentWillMount(){
    this.setState({
      id:this.props.match.params.listid
    })
    this.props.changeKey()
  }
  componentDidUpdate(){
    
  }
  componentDidMount(){
  }
  render() { 
    return (  
      <h2>list---{this.state.id}</h2>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    headerKey:state.headerkey
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeKey(){
      const action=changeHeaderKey(2)
      dispatch(action)
    }
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(List);