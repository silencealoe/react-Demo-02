import {GET_TODOLIST,CHANGE_HEADERKEY,CHANGE_HEADERSHOW} from './actionType'
import axios from 'axios'

export const getListAction=(list)=>({
  type:GET_TODOLIST,
  list
})
export const changeHeaderKey=(key)=>({
  type:CHANGE_HEADERKEY,
  key
})
export const changeHeaderShow=(value)=>({
  type:CHANGE_HEADERSHOW,
  value
})
export const getList=()=>{
return (dispatch)=>{
  axios.get('http://rap2api.taobao.org/app/mock/232506/getTodoList').then(res=>{
        const action = getListAction(res.data.list)
        dispatch(action)
  })
} 
}