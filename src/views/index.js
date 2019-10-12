import React, { Component} from 'react';
import { Layout} from 'antd';
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import Breadcrumb from '../components/Breadcrumb'
import Sider from '../components/Sider'
import TodoList from '../components/Todolist'
import {getList} from '../store/actionCreator'

import {ADD_LIST,DELETE_LIST,CHANGE_INPUT} from '../store/actionType'

const { Content, Footer} = Layout;
class Index extends Component {
  componentDidMount(){
    this.props.getTodoList()
  }
  render() { 
    return ( 
      <Layout>
      {/* <Header/> */}
      <Content style={{ padding: '0 50px'}}>
         <Breadcrumb></Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff',height:800 }}>
          <Sider/>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {
              // this.props.children
            }
           <TodoList {...this.props}></TodoList>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    )
  }
}
const mapStateToProps=(state)=>{
  // console.log(state)
  return {
    inputVal:state.inputVal,
    list:state.list
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    handleInput(e){
      // console.log(e.target.value)
      const action={
        type:CHANGE_INPUT,
        value:e.target.value
      }
      dispatch(action)
    },
    handleAdd(){
      // console.log('value')
      const addAction={
        type:ADD_LIST
      }
      dispatch(addAction)
    },
    deleteItem(index){
      const action={
        type:DELETE_LIST,
        index
      }
      dispatch(action)
    },
    getTodoList(){
      const gettodolist=getList()
      dispatch(gettodolist)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);