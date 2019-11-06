import React, {useContext } from 'react';
import {todolist} from './hooksTodolist'
function Item(){
  const {listarray,dispatch}=useContext(todolist)
  function delteItem(ind){
    console.log(ind)
    dispatch({type:'deleteitem',index:ind})
  }
  return(
    <div>
      {
        listarray.list.map((item,index)=>(
          <p key={item.id}>{item.name}   <button onClick={delteItem.bind(null,index)}>del</button></p>
        )

        )
      }

    </div>
  )
}
export default Item