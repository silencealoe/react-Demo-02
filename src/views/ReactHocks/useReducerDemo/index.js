import React, { } from 'react';
import {Color} from './color'
import Buttons from './buttons';
import ShowArea from './showArea';
function UseReducerDemo(){
  return(
    <div>
      <h2>useReducerDemo</h2>
      <Color>
        <ShowArea></ShowArea>
        <Buttons></Buttons>
      </Color>

    </div>
  )
}
export default UseReducerDemo