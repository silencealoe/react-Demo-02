import React, {useReducer} from 'react';
const UPDATECOLOR='update_color'
export  const [color,dispatch]=useReducer((state,action)=>{
  switch(action.type){
    case UPDATECOLOR: return action.color
    default:return state
  }
},'blue')
