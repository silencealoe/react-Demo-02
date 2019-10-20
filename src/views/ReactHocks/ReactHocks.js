import React, { Component,useState, useEffect} from 'react';

function ReactHocks4(){
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log(`ComponentDidMount=>You clicked ${count} times`)
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
class ReactHocks extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      nums:0
    }
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
        <h2>不使用ReactHocks</h2> 
        <p>you click <span>{this.state.nums}</span> times</p>
        <button onClick={this.handleClick.bind(this)}>click</button>
        <ReactHocks2/>
        <ReactHocks3/>
        <ReactHocks4/>
      </div>
       );
  }
}
 
export default ReactHocks;