import React, {createContext, useReducer } from 'react';
export const colorContext=createContext()
const UPDATECOLOR='update_color'
export const Color=(props)=>{
  const [styles,dispatch]=useReducer((state,action)=>{
    switch(action.type){
      case UPDATECOLOR: return action.styles
      default:return state
    }
  },{color:'blue',fontSize:'20px'})
  return(
    <div>
      <colorContext.Provider value={{styles,dispatch}}>
        {props.children}
      </colorContext.Provider>
    </div>
  )
}