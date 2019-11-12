import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changeHeaderKey} from '../store/actionCreator'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'


class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentWillMount(){
    this.props.changeKey()
  }
  componentDidMount(){
    let myecharts=echarts.init(document.getElementById('main'))
    myecharts.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
      }]
  });

  }
  render() { 
    return ( 
      <div>
        <h2>用户状态</h2>
        <div id="main" style={{ width: 400, height: 400 }}></div>
      </div>
     );
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    changeKey(){
      const action=changeHeaderKey(3)
      dispatch(action)
    }
  }
}
 
export default connect(null,mapDispatchToProps)(Status);