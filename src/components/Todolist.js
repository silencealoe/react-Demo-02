import React,{Component,Fragment}from 'react';
import {Input} from 'antd'
import {connect} from 'react-redux'
import AddItem from '../components/AddItem'
import {getList,changeSideKey} from '../store/actionCreator'
import {ADD_LIST,DELETE_LIST,CHANGE_INPUT} from '../store/actionType'

const { Search } = Input;


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentWillMount(){
    this.props.getTodoList()
    this.props.changeSideKey(1)
  }
  render() { 
    let {inputVal,list,handleAdd,handleInput,deleteItem} =this.props
    return ( 
      <Fragment>
      <Search
        placeholder="input search text"
        enterButton="add"
        size="large"
        value={inputVal}
        onChange={handleInput}
        style={{width:400}}
        onSearch={handleAdd}
      /> 
      <AddItem list={list} deleteItem={deleteItem}/>
  </Fragment>
     );
  }
}
 
const mapStateToProps=(state)=>{
  // console.log(state)
  return {
    inputVal:state.inputVal,
    list:state.list
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    handleInput(e){
      // console.log(e.target.value)
      const action={
        type:CHANGE_INPUT,
        value:e.target.value
      }
      dispatch(action)
    },
    handleAdd(){
      // console.log('value')
      const addAction={
        type:ADD_LIST
      }
      dispatch(addAction)
    },
    deleteItem(index){
      const action={
        type:DELETE_LIST,
        index
      }
      dispatch(action)
    },
    getTodoList(){
      const gettodolist=getList()
      dispatch(gettodolist)
    },
    changeSideKey(key){
       const action=changeSideKey(key)
       dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)