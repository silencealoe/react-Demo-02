import React, { useContext } from 'react';
import { Button } from 'antd';
import {colorContext} from './color' 
function Buttons(){
  const {dispatch}=useContext(colorContext)
    return (
      <div>
        <Button onClick={()=>{dispatch({type:'update_color',styles:{color:'yellow',fontSize:'40px'}})}}>黄色</Button>
        <Button onClick={()=>{dispatch({type:'update_color',styles:{color:'green',fontSize:'30px'}})}}>绿色</Button>
      </div>
    )
}
export default Buttons