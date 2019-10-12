import React,{Fragment}from 'react';
import {Input} from 'antd'
import AddItem from '../components/AddItem'
const { Search } = Input;

const TodoList=(props)=>{   //UI组件  提高程序运行性能 ，没有this关键字
  let {inputVal,list,deleteItem,handleInput,handleAdd}=props
  return(   
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

  )
}
export default TodoList