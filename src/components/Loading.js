import React, { Component } from 'react';
import '@/static/index.scss'
import {Spin} from 'antd'
class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="loading">
        <Spin size="large"/>
      </div>
     );
  }
}
 
export default Loading;