import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changeHeaderKey,getCreateStatus} from '../store/actionCreator'
import echarts from 'echarts'

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  getcreateDate(data){
      let xLabel=[]
      let xValue=[]
      console.log('getdata',data)
      data.map((item)=>{
        xLabel.push(item.label)
        xValue.push(item.value)
      })
      return{
        xLabel,
        xValue
      }

  }
  componentWillMount(){
    this.props.changeKey()
    this.props.getCreate()
  }
  componentDidUpdate(){
    
    let myecharts=echarts.init(document.getElementById('main'))
    console.log('props',this.props.createdata)
    let data=this.getcreateDate(this.props.createdata)
    console.log('data',data)
    myecharts.clear()
    myecharts=echarts.init(document.getElementById('main'))
    
    myecharts.setOption({
      title: { text: '最近30天新建仓库数',x:'center',y:0 },
      tooltip: {},
      legend:{
        show:true,
        data: ['新建仓库数'],          //和nseries的name保持一致才能显示
        icon: 'roundRect',
        type: 'plain',          // 普通图例
        orient: 'horizontal',   // 水平
        left:'45%',               // 左距离
        top:30,                // 上距离
        bottom:0,             // 下距离
        // width:300,              // 宽度
        itemGap: 20,            // 间隔
        itemWidth: 48,          // 图形宽度。
        itemHeight:18,         // 图形高度。
      },
      grid: {
        show:true,
        // width: {totalWidth} - x - x2,
        // height: {totalHeight} - y - y2,
        left:'10%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc'
    },
      xAxis: {
          type: 'category',
          data: data.xLabel,
          splitNumber:30,  //x轴分隔数
          boundaryGap:false,  //label与网格线对齐
          axisLabel:{ //设置label样式
            fontStyle:'italic', 
            rotate:40,
            interval:0 //label全部显示
          },
          axisLine:{ //坐标轴线设置
            lineStyle:{
              color:'#464343',
            }
          },
          axisTick:{ //刻度
            alignWithLabel:true
          },
          splitLine: { //网格线分隔
            show: true,
            lineStyle:{
              color: ['#f0f0f0'],
              width: 1,
              type: 'solid'
            }
        }
      },
     
      yAxis: {
        type:'value',
        // data:[0,5,10,15,20,25,30,35,40],
        axisLine:{
          lineStyle:{
            color:'#464343'
          }
        },
        splitLine: {  //网格中的分割线
          show: true,
          lineStyle:{
            color: ['#f0f0f0'],
            width: 1,
            type: 'solid'
          }
        }
      },
      series: [{
        name: '新建仓库数',
        type: 'line',
        smooth:true,   //平滑曲线
        symbolSize: 10, //实心点大小
        symbol:'circle',  //默认空心圆，circle:实心圆，rect：实心正方形,roundRect：圆角正方形,diamond:菱形，arrow，pin,none
        itemStyle: {
          // 点的颜色。
          color: '#36A2EB'
        },
        data: data.xValue
      }],
    //   animationEasing: 'elasticOut',
    //   animationDuration: function () {
    //     // 越往后的数据延迟越大
    //     return 2000;
    // },
    //   animationDelayUpdate: function () {
    //     // 越往后的数据延迟越大
    //     return 1000;
    // }
  });
  setTimeout(function(){
    window.onresize=function(){
      myecharts.resize()
    }
  })

  }
  componentDidMount(){
    let myechartline=echarts.init(document.getElementById('mainline'))
    myechartline.setOption({
      title:{text:'123'},
      tooltip: {},
    //   grid: {
    //     show:true,
    //     // width: {totalWidth} - x - x2,
    //     // height: {totalHeight} - y - y2,
    //     left:'10%',
    //     // backgroundColor: 'white',
    //     borderWidth: 1,
    //     borderColor: '#ccc'
    // },
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series:[{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
      }]
      
  })
  


    

  }
  render() { 
    return ( 
      <div className='status_wrap'>
        <h2>用户状态</h2>
        <ul className="chartslist">      
          <li>
             <div id="mainline" style={{width:'400px',height:'200px'}}></div>
          </li>
          <li>
              <div id="main" className="charts"></div>
          </li>
        </ul>
      </div>
     );
  }
}

const mapStateToProps=(state)=>{
  console.log(state.statusCreateData)
  return{
    createdata:state.statusCreateData
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    changeKey(){
      const action=changeHeaderKey(3)
      dispatch(action)
    },
    async getCreate(){
      const action=await getCreateStatus()
      dispatch(action)
    }
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Status);