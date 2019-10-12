import React, { Component } from 'react';
import {Breadcrumb} from 'antd'

class MyBreadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (   
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>);
  }
}
 
export default MyBreadcrumb;