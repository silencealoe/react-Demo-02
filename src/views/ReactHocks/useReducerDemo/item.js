import React, {useContext } from 'react';
import {todolist} from './hooksTodolist'
function Item(){
  console.log(useContext(todolist))
  const {listarray,dispatch}=useContext(todolist)
  function delteItem(index){
    console.log(index)
    

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