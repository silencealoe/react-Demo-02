import React, { createContext, useReducer } from 'react';
import InputItem from './inputItem';
import Item from './item'
export const todolist=createContext()
const ADDITEM='additem'
const CHANGEVALUE='changevalue'
export const Todolist=()=>{
  const [listarray,dispatch] = useReducer((state,action)=>{
    switch(action.type){
      case ADDITEM:{
                    console.log(state.list)
                    // return state
                    // state.list.push({id:`10${state.list.length}`,name:state.defVal})
                  
                    console.log(state.list)
                   return {
                     ...state,
                     list:[...state.list,{id:`10${state.list.length}`,name:state.defVal}]
                      }
                  }
      case CHANGEVALUE:{
                      
                        return {
                          ...state,
                          defVal:action.value
                        }
                      }
      default:return state
    }
  },{list:[{id:'100',name:'下午五点半下班'},{id:'101',name:'七点吃晚饭'},{id:'102',name:'八点去健身'}],defVal:'write'})
  // {console.log('lists',listarray)}
  return (
    <div>
      <h2>hook Todolist</h2>
      <todolist.Provider value={{listarray,dispatch}}>
        <InputItem/>
        <Item/>
      </todolist.Provider>
    </div>
  )
}
