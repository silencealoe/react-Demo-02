import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {changeSideKey} from '@/store/actionCreator'
function BaiduMap(props){
  console.log(props)
  useEffect(()=>{
    console.log(props)
    props.changeSideKeys(5)
    // var map = new BMap.Map("map"); // 创建Map实例
    // // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
    // map.centerAndZoom('北京',15); // 初始化地图,设置中心点坐标和地图级别
    // // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    // // map.setCurrentCity("大连"); // 设置地图显示的城市 此项是必须设置的
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  })
  return(
    <div>
      <h2>地图</h2>
        <div className="baidumap" id="map" style={{width:1000,height:800}}>
      </div>
    </div>
  )
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeSideKeys(key){
      const action=changeSideKey(key)
      dispatch(action)
    }
  }
}

export default connect(null,mapDispatchToProps)(BaiduMap)