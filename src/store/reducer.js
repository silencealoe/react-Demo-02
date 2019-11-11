import {GET_TODOLIST,ADD_LIST,DELETE_LIST,CHANGE_INPUT,CHANGE_HEADERKEY,CHANGE_HEADERSHOW,CHANGE_SIDEKEY,GETOWNERLIST,CHANGE_LOADINGSHOW,CHNAGE_SEARCHINPUT,GET_FILTERSEARCH} from './actionType'
let defaultData={
  inputVal:'write',
  list:['今天是星期四了','还有15分钟就下班了','开心'],
  headerkey:0,
  headerShow:true,
  sideKey:0,
  OwnerList:[],
  loadingShow:true,
  searchInput:''
}
export default (state = defaultData , action)=>{ 
  // console.log(action)
  if(action.type === CHANGE_INPUT){
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputVal = action.value
    return newState
  }
  if(action.type === GET_TODOLIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list=action.list
    return newState
  }
  if(action.type === ADD_LIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputVal)
    newState.inputVal=''
    return newState
  }
  if(action.type === DELETE_LIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  if(action.type === CHANGE_HEADERKEY){
    let newState = JSON.parse(JSON.stringify(state))
    newState.headerkey = action.key
    return newState
  }
  if(action.type === CHANGE_HEADERSHOW){
    let newState = JSON.parse(JSON.stringify(state))
    newState.headerShow = action.value
    return newState
  }
  if(action.type === CHANGE_SIDEKEY){
    let newState = JSON.parse(JSON.stringify(state))
    newState.sideKey = action.key
    return newState
  }
  if(action.type === GETOWNERLIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.OwnerList = action.data
    newState.loadingShow = false
    return newState
  }
  if(action.type === CHANGE_LOADINGSHOW){
    let newState = JSON.parse(JSON.stringify(state))
    newState.loadingShow = action.value
    return newState
  }
  if(action.type === CHNAGE_SEARCHINPUT ){
    let newState = JSON.parse(JSON.stringify(state))
    newState.searchInput = action.value
    return newState
  }
  if(action.type === GET_FILTERSEARCH) {
    let newState = JSON.parse(JSON.stringify(state))
    // const newList = newState.OwnerList.filter((item)=>{
    //   return item.name.includes(newState.searchInput)
    // })
    newState.OwnerList = action.data
    return newState
  }

  return state
}