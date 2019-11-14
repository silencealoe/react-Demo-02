import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changeHeaderKey,getCreateStatus,getActiveStatus} from '../store/actionCreator'
import echarts from 'echarts'

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  getcreateDate(data){
      let Label=[]
      let Value=[]
      console.log('getdata',data)
      data.map((item)=>{
        if(item.label) Label.push(item.label)
        if(item.value) Value.push(item.value)
        if(item.fullname) Label.push(item.fullname)
      })
      return{
        Label,
        Value
      }
  }
  chartsDemo01(){
    let myechartline=echarts.init(document.getElementById('mainline'))
    myechartline.setOption({
      title:{text:'折线图堆叠'},
      legend:  {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
      },
      tooltip: {
        trigger: 'axis'
      }, //提示框
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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap:false,
      },
      yAxis: {
          type: 'value'
      },
      series:[
        {
          name:'邮件营销',
          type:'line',
          smooth:true,
          stack: '总量',
          data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
          name:'联盟广告',
          type:'line',
          smooth:true,
          stack: '总量',
          data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
          name:'视频广告',
          type:'line',
          smooth:true,
          stack: '总量',
          data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
          name:'直接访问',
          type:'line',
          smooth:true,
          stack: '总量',
          data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
          name:'搜索引擎',
          type:'line',
          smooth:true,
          stack: '总量',
          data:[820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  })
  }
  chartsStatusOne(myecharts){
    // let myecharts=echarts.init(document.getElementById('main'))
    let data=this.getcreateDate(this.props.createdata)
    // myecharts.clear()
    // myecharts=echarts.init(document.getElementById('main'))
    myecharts.setOption({
      title: { text: '最近30天新建仓库数',x:'center',y:0 }, //图表标题
      tooltip: {},
      legend:{ //图例
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
      grid: {  //坐标系网格
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
          data: data.Label,
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
      series: [{ //系列列表
        name: '新建仓库数',
        type: 'line',
        smooth:true,   //平滑曲线
        symbolSize: 6, //实心点大小
        symbol:'circle',  //默认空心圆，circle:实心圆，rect：实心正方形,roundRect：圆角正方形,diamond:菱形，arrow，pin,none
        itemStyle: {
          // 点，折线的颜色。
          color: '#36A2EB'
        },
        data: data.Value
      }],
      animationEasing: 'elasticOut',
      animationDuration: function () {
        // 越往后的数据延迟越大
        return 2000;
      },
      animationDelayUpdate: function () {
        // 越往后的数据延迟越大
        return 1000;
      }
    });
    setTimeout(function(){
      window.onresize=function(){  //图表随着浏览器窗口变化
        myecharts.resize()
      }
    })

  }
  getMin(arr){
    let min=Math.min(...arr)
    let result=parseInt(min/100)*100
    return result

  }
  chartsStatusTwo(myechartstwo){
    // let myechartstwo=echarts.init(document.getElementById('mainbar'))
    let data=this.getcreateDate(this.props.activedata)
    let min=this.getMin(data.Value)
    myechartstwo.setOption({
      title:{text:'最近30天活跃用户排行',x:'center'},
      legend:{
        data:['操作'],
        top:30
      },
      tooltip: {
        position:'right', //提示框在鼠标所在图形的右侧
        // formatter:'{b0}<br/>{a0}:{c0}', //{a}, {b}，{c}表示系列名,数据名,数据值
        trigger: 'item',
        formatter:function(param){ //显示前面的小圆点 //name数据名 marker是小圆点 seriesName系列名 value数据值
          //改变小圆点的样式
          param.marker='<span style="display:inline-block;margin-right:5px;width:16px;height:10px;border-radius:2px;background:#36A2EB"></span>'
          return param.name+'<br/>'+param.marker+''+param.seriesName+':'+param.value  
        }
        // axisPointer: {
        //     type: 'shadow'
        // }
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        min:min,
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
        type: 'category',
        data: data.Label,
        splitLine: { //网格线分隔
          show: true,
          lineStyle:{
            color: ['#f0f0f0'],
            width: 1,
            type: 'solid'
          }
        }
      },
      series:[
        {
          name: '操作',
          type: 'bar',
          itemStyle: {
            // 点，折线的颜色。
            color: '#36A2EB'
          },
          data:data.Value
        }
      ]
    })
    // setTimeout(function(){
    //   window.onresize=function(){  //图表随着浏览器窗口变化
    //     myechartstwo.resize()
    //   }
    // })
  }
  componentWillMount(){
    this.props.changeKey()
    this.props.getCreate()
    this.props.getActive()
  }
  componentDidUpdate(){
    let myechartstwo=echarts.init(document.getElementById('mainbar'))
    let myecharts=echarts.init(document.getElementById('main'))

    this.chartsStatusOne(myecharts)
    this.chartsStatusTwo(myechartstwo)
    setTimeout(()=>{
      window.onresize=()=>{
        myecharts.resize()
        myechartstwo.resize()

      }
    })
  }
  componentDidMount(){
    this.chartsDemo01()
  }
  render() { 
    return ( 
      <div className='status_wrap'>
        <h2>用户状态</h2>
        <ul className="chartslist">      
          <li>
             <div id="mainline"  className="charts"></div>
          </li>
          <li>
              <div id="main" className="charts"></div>
          </li>
          <li>
              <div id="mainbar" className="charts"></div>
          </li>
        </ul>
      </div>
     );
  }
}

const mapStateToProps=(state)=>{
  console.log(state.statusCreateData)
  return{
    createdata:state.statusCreateData,
    activedata:state.statusActiveData
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    changeKey(){
      const action=changeHeaderKey(3)
      dispatch(action)
    },
    getCreate(){
      const action=getCreateStatus()
      dispatch(action)
    },
    getActive(){
      const action=getActiveStatus()
      dispatch(action)
    }
    
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Status);