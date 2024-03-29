import React, { Component } from 'react';
import {Layout,Menu} from 'antd'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import '../static/index.scss'

const {Header}=Layout
class MyHeader extends Component {
  componentDidMount(){
    
  }
  componentDidUpdate(){
    
  }
  render() { 
    return ( 
      <Header className="header">
        <div className="logo">
          <NavLink to="/index">
            <img src={[require('../static/img/bmslogo.png')]} alt="bms" width="100" height="40" />
          </NavLink>
        </div>
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
            <NavLink to="/status">
              状态
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
