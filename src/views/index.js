import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon,Input} from 'antd';
import 'antd/dist/antd.css';
import AddItem from '../components/AddItem'
import store from '../store/index'
import {getList} from '../store/actionCreator'
import {ADD_LIST,DELETE_LIST} from '../store/actionType'
import {connect} from 'react-redux'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.storeChange=this.storeChange.bind(this)
    this.handleInput=this.handleInput.bind(this)
    this.handleAdd=this.handleAdd.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }
  storeChange(){
    this.setState(store.getState())
  }
  deleteItem(index){
    const action={
      type:DELETE_LIST,
      index
    }
    store.dispatch(action)
  }
  handleInput(e){
    console.log(e.target.value)
    this.setState({
      inputVal:e.target.value
    })
  }
  handleAdd(){
    const addAction={
      type:ADD_LIST,
      value:this.state.inputVal
    }
    store.dispatch(addAction)
  }
  componentDidMount(){
    const action=getList()
    store.dispatch(action)
  }
  render() { 
    return ( 
      <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px'}}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: '#fff',height:800 }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    subnav 2
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Search
            placeholder="input search text"
            enterButton="add"
            size="large"
            value={this.props.inputVal}
            onChange={this.handleInput}
            style={{width:400}}
            onSearch={this.handleAdd}
          /> 
          <AddItem list={this.state.list} deleteItem={this.deleteItem}/>
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
    inputVal:state.inputVal
  }
}
export default connect(mapStateToProps,null)(Index);