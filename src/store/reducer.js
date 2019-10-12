import {GET_TODOLIST,ADD_LIST,DELETE_LIST} from './actionType'
let defaultData={
  inputVal:'write',
  list:['今天是星期四了','还有15分钟就下班了','开心']
}
export default (state = defaultData , action)=>{
  console.log(action)
  if(action.type === GET_TODOLIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list=action.list
    return newState
  }
  if(action.type === ADD_LIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.value)
    return newState
  }
  if(action.type === DELETE_LIST){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState

  }
  return state
}