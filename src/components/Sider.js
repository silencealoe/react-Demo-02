import React, { Component } from 'react';
import {Layout,Menu, Icon} from 'antd'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
const {Sider}=Layout
const { SubMenu } = Menu;
class MySider extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  <Sider width={200} style={{ background: '#fff' }}>
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      selectedKeys={[this.props.sideKey.toString()]}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />
            React 基础
          </span>
        }
      >
        <Menu.Item key="1">
          <NavLink to="/index/todolist">
            Redux(Todolist)
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/index/reacthocks">
            React Hooks
          </NavLink>
          </Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="laptop" />
            地理信息
          </span>
        }
      >
        <Menu.Item key="5">
          <NavLink to="/index/map">
            地图
          </NavLink>
        </Menu.Item>
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
  </Sider> );
  }
}

const mapStateToProps=(state)=>{
  return{
    sideKey:state.sideKey
  }
}
 
export default connect(mapStateToProps,null)(MySider);