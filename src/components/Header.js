import React, { Component } from 'react';
import {Layout,Menu} from 'antd'
import {NavLink} from 'react-router-dom'

const {Header}=Layout
class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
        
          <Menu.Item key="1">
            <NavLink to="/index">
              nav 1 
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2"> 
            <NavLink to="/list">
              nav 2 
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
 
export default MyHeader;
