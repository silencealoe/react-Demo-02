import React, { Component } from 'react';
import {Layout,Menu} from 'antd'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const {Header}=Layout
class MyHeader extends Component {
  componentDidMount(){
    
  }
  componentDidUpdate(){
    
  }
  render() { 
    return ( 
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          // defaultSelectedKeys={[this.props.headerKey.toString()]} // default 只适用于默认值，后期改变值，不会改变组件
          selectedKeys={[this.props.headerKey.toString()]}
          style={{ lineHeight: '64px' }}
        >
        
          <Menu.Item key="1">
            <NavLink to="/index">
              首页
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2"> 
            <NavLink to="/list/1234">
              仓库
            </NavLink></Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/mypage">
              nav 3
            </NavLink>
          </Menu.Item>
        </Menu>
      </Header> );
  }
}
const mapStateToProps=(state)=>{
  return{
    headerKey:state.headerkey
  }
}
 
export default connect(mapStateToProps,null)(MyHeader);
