import React, { createContext, useReducer } from 'react';
import InputItem from './inputItem';
import Item from './item'
export const todolist=createContext()
const ADDITEM='additem'
const CHANGEVALUE='changevalue'
const DELETEITEM='deleteitem'
export const Todolist=()=>{
  const [listarray,dispatch] = useReducer((state,action)=>{
    switch(action.type){
      case ADDITEM:{
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
      case DELETEITEM:{
                    // console.log(state.list.splice(action.index,1))
                    let newarr=JSON.parse(JSON.stringify(state.list))
                    newarr.splice(action.index,1)
                    return {
                      ...state,
                      list:newarr
                    }
      }
      default:return state
    }
  },{list:[{id:'100',name:'下午五点半下班'},{id:'101',name:'七点吃晚饭'},{id:'102',name:'八点去健身'}],defVal:'write'})
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
