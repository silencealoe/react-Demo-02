import React, { useContext } from 'react';
import {colorContext} from './color'
function ShowArea(){
 const {styles}=useContext(colorContext)
  return (
    <div style={{color:styles.color,fontSize:styles.fontSize}}>
      <p>我的颜色是{styles.color}</p>
    </div>
  )
}
export default ShowArea