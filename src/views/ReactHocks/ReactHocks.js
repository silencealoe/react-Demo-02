import React, { Component,useState, useEffect,Fragment,useMemo,useRef,createContext,useContext,useReducer} from 'react';
import {Input,Button} from 'antd'
import {connect} from 'react-redux'
import {changeSideKey} from '@/store/actionCreator'
import UseReducerDemo from './useReducerDemo';
import {Todolist} from './useReducerDemo/hooksTodolist'

const countContext=createContext()
function UseRefDemo(){
  const inputVal=useRef(false)
  const ButtonClick=()=>{
    console.log(inputVal)

    inputVal.current.value="hahahahha"
  }
  return(
    <Fragment>
      <input type="text" ref={inputVal}/>
      {/* <Input type="primary" style={{width:400}} ref={inputVal}/> */}
      <Button onClick={ButtonClick}>在input上展示文字</Button>
    </Fragment>
  )
}
function MemoChild({name,children}){
  function changeXiaohong(name){
    console.log('小红开始表演')
    let str='点击了小红'
    return name+str
  }
  const actionXiaohong=useMemo(()=>changeXiaohong(name),[name])   //第二个参数匹配成功才会执行只有点击小红 值发生改变才会触发会触发这个方法
  return(
    <Fragment>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </Fragment>
  )
}
function ReactUseMemo(){
  const [xiaohong,setxiaohong]=useState('我是小红')
  const [xiaoming,setxiaoming]=useState('我是小明')
  return(
    <Fragment>
      <h1>使用useMemo进行优化</h1>
      <button onClick={()=>{setxiaohong(xiaohong+1)}}>小红</button>
      <button onClick={()=>{setxiaoming(new Date().getTime()+'come on')}}>小明</button>
      <MemoChild name={xiaohong}>{xiaoming}</MemoChild>
    </Fragment>
  )
}
function ReactHocks4(){
  const [count,setCount]=useState(0)
  useEffect(()=>{
    // console.log(`ComponentDidMount=>You clicked ${count} times`)
    return ()=>{
      console.log('bye bye')
    }
  },[])
  //useEffect的第二个参数，它是一个数组，数组中可以写入很多状态对应的变量，意思是当状态值发生变化时，我们才进行解绑。但是当传空数组[]时，就是当组件将被销毁时才进行解绑，这也就实现了componentWillUnmount的生命周期函数
  return (
    <div>
      <h2>useEffect实现componentwillunmount</h2>
      <button onClick={()=>{setCount(count+1)}}>click04</button>
    </div>
  )
}
function ReactHocks3(){
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log(`ComponentDidMount=>You clicked ${count} times`)
  })
  return(
  <div>
       <h2>useEffect代替componentDidMount和componentDidUpdate</h2>
       <p>you click <span>{count}</span> times</p>
      <button onClick={()=>{setCount(count+1)}}>click02</button>
  </div>
  )
}
function ReactHocks2(){   //React Hooks就是用函数的形式代替原来的继承类的形式，并且使用预函数的形式管理state，有Hooks可以不再使用类的形式定义组件了
  const [count,setCount] = useState(1) //React是根据useState出现的顺序来确定多个state对应的值
  const [name]=useState('huihui')
  const [age]=useState(18)
  return (
    <div>
      <h2>使用ReactHocks</h2>
       <p>you click <span>{count}</span> times</p>
        <button onClick={()=>{setCount(count+1)}}>click02</button>
        <p>my name is {name}</p>
        <p>age is {age}</p>
    </div>
  )
}

function ReactUseContextChild(){  //因为没有constructor所以 参数props拿不到 值为空（没有了constructor构造函数也就没有了props的接收）
  // console.log(props)
  const value=useContext(countContext)
  // const [data,setdata]=useState(value.chids)
  function deleteIt(index){
    console.log('index',index)
    value.del(index)
  }
  return (
    <>
    <h2>子传父：</h2>
      <p>收到来自父组件的值：{value.count}</p>
      {
        value.chids.map((item,index)=>(
          <p key={item.id}>{item.name} <button onClick={deleteIt.bind(null,index)}>delete</button></p>
        ))
      }
    </>
  )
}
function ReactUseContext(props){  //父组件中有constructor所以参数可以拿到父组件传的值
  // console.log(props)
  let [count,setCount]=useState(0)
  let [children,setChildren]=useState([{name:'小明',id:11},{name:'小红',id:12},{name:'小黄',id:13},{name:'小蓝',id:14}])
  // let obj=[{name:'xiaoming',age:12}]
  function deleteItem(index){
    children.splice(index,1)
    setChildren(children.concat())  
   }
  return(
    <>
      <h1>usecontext实现父子组件传值</h1>
      <p>父组件中的值：{count}</p>
      <h2>父亲的孩子们</h2>
      {
        children.map(item=>(
         <p key={item.id}>{item.name}</p>
        ))
      }

      <button onClick={()=>{setCount(count+1)}}>click(点击传值)</button>
      <countContext.Provider value={{count,chids:children,del:deleteItem}}>
          <ReactUseContextChild />
      </countContext.Provider>
    </>
  )
}
function ReactUseReducer(){
  const [count,dispatch]=useReducer((state,action)=>{
    switch(action.type){
      case 'inc':return state+1
      case 'dec':return state-1
      default:return state
    }
  },0)
  return(
    <div>
      <h2>useReducer</h2>
      <p>现在的分数是：{count}</p>
      <button onClick={()=>{dispatch({type:'inc'})}}>Increment</button>
      <button onClick={()=>{dispatch({type:'dec'})}}>Dncrement</button>
    </div>
  )
}
class ReactHocks extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      nums:0
    }
  }
  componentWillMount(){
    this.props.changeSideKeys(2)
  }
  handleClick(){
    // console.log(this.state.nums++)

    this.setState({
      nums:this.state.nums+1
    })
  }
  render() { 
    return (
      <div>
        <h1>React Hooks</h1>
        <h2>不使用ReactHocks</h2> 
        <p>you click <span>{this.state.nums}</span> times</p>
        <button onClick={this.handleClick.bind(this)}>click</button>
        <ReactHocks2/>
        <ReactHocks3/>
        <ReactHocks4/>
        <ReactUseMemo/>
        <UseRefDemo/>
        <ReactUseContext text={'给你100块'}/>
        <ReactUseReducer/>
        <UseReducerDemo/>
        <Todolist/>
      </div>
       );
  }
}
 const mapDispatchToProps=(dispatch)=>{
   return{
     changeSideKeys(key){
       const action=changeSideKey(key)
       dispatch(action)
     }
   }
 }
export default connect(null,mapDispatchToProps)(ReactHocks);