import React, { useContext } from 'react';
import {todolist} from './hooksTodolist'
function InputItem(){
  console.log(useContext(todolist))
  const {listarray,dispatch}=useContext(todolist)
  function handleAdd(){
    console.log('add')
    dispatch({type:'additem'})
  }
  function handleChange(e){
    console.log(e.target.value)
    dispatch({type:'changevalue',value:e.target.value})
  }
  return(
    <div>
      <input type="text"  onChange={handleChange} value={listarray.defVal}/>
      <button onClick={handleAdd}>add</button>

    </div>
  )
}
export default InputItem