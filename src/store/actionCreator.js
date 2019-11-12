import {
  GET_TODOLIST,
  CHANGE_HEADERKEY,
  CHANGE_HEADERSHOW,
  CHANGE_SIDEKEY,
  GETOWNERLIST,
  CHANGE_LOADINGSHOW,
  CHNAGE_SEARCHINPUT,
  GET_FILTERSEARCH,
  CHANGE_PAGEKEY} from './actionType'
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
export const changeSideKey=(key)=>({
  type:CHANGE_SIDEKEY,
  key
})
export const getOwnerListAction=(data)=>({
  type:GETOWNERLIST,
  data
})
export const changeLoadingShow=(value)=>({
  type:CHANGE_LOADINGSHOW,
  value
})
export const changeInput=(value)=>({
  type:CHNAGE_SEARCHINPUT,
  value
})
export const filterSearchAction=(data)=>({
  type:GET_FILTERSEARCH,
  data
})
export const changePageAction=(data)=>({
  type:CHANGE_PAGEKEY,
  data
})
export const getList=()=>{
  return (dispatch)=>{
    axios.get('http://rap2api.taobao.org/app/mock/232506/getTodoList').then(res=>{
          const action = getListAction(res.data.list)
          dispatch(action)
    })
  } 
}
export const getOwnerList=()=>{
  return  (dispatch)=>{
      axios.get('http://rap2api.taobao.org/repository/list?user=&organization=&name=&cursor=1&limit=100').then(res=>{
      const action = getOwnerListAction(res.data.data)
      dispatch(action)
    })
  }
}
export const getFilterOwnerList=(value)=>{
  return (dispatch)=>{
    axios.get(`http://rap2api.taobao.org/repository/list?user=&organization=&name=${value}&cursor=1&limit=100`).then(res=>{
      const action = filterSearchAction(res.data.data)
      dispatch(action)
    })
  }
}
export const getPageList=(page)=>{
  return (dispatch)=>{
    axios.get(`http://rap2api.taobao.org/repository/list?user=&organization=&name=&cursor=${page}&limit=100`).then(res=>{
      console.log(res.data)
      const action=changePageAction({page,list:res.data.data})
      dispatch(action)
    })
  }
}
