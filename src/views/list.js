import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Icon,message,Pagination} from 'antd'
import {changeHeaderKey, getOwnerList,changeLoadingShow,changeInput,getFilterOwnerList} from '../store/actionCreator'
import '@/static/index.scss'
import Loading from '@/components//Loading'
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      current:1
    }
  }
  componentWillMount(){
    this.setState({
      id:this.props.match.params.listid  //刷新地址栏。参数依然存在，只能传字符串,传值太多，url会很长
    })
    this.props.changeKey()    
  }
  componentDidUpdate(){
    
  }
  componentDidMount(){
    this.props.getOwner()
  }

  render() { 
    const {loadingShow,handlePress,handlesearch,searchInput,handleChange,formatDate}=this.props
    return (
      <>
      {
        loadingShow?
        <Loading></Loading>:''
      }
        {/* <h2>list---{this.state.id}</h2> */}
     
        <div className="list">
          <div className="search">
            <label>
                <span>搜索仓库：</span>
                <input type="text" className="search_input" onKeyPress={handlePress.bind(null,handlesearch,searchInput)} onChange={handleChange} value={searchInput}/>
                <Icon type="search" style={{fontSize:20}} className="search_btn" onClick={handlesearch.bind(null,searchInput)}/>
            </label>
          </div>
          <ul className="studylist">
            {
              this.props.ownerList.map((item)=>{
                return(
                  <li className="studylist_item" key={item.id}>
                  <div className="itemhead">
                    <h3> 
                      <Icon type="book" style={{fontSize:16,color:'gray'}}/>
                      <span>{item.name}</span>
                    </h3>
                    <div className="item_action">
                      <span>
                        <Icon type="code" style={{fontSize:16,color:'gray'}}/>
                      </span>
                    </div>
                  </div>
                <div className="itemdescription">{item.description}</div>
                  <div className="item_footer">
                    <p>作者:{item.owner.fullname}</p>
                    <p>更新于{formatDate(item.updatedAt)}前</p>
                  </div>
                </li>
                )
              })
            }
          </ul>
          <div className="list_pagination">
              <Pagination current={this.state.current} onChange={this.onChange} total={50} />
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps=(state)=>{
  // console.log(state.OwnerList)
  return {
    headerKey:state.headerkey,
    ownerList:state.OwnerList,
    loadingShow:state.loadingShow,
    searchInput:state.searchInput
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
     changeKey(){
      const action=changeHeaderKey(2)
      dispatch(action)
    },
    formatDate(time){
      let startDate=new Date(time)
      let endDate=new Date()
      let dis=endDate-startDate
      let days=Math.floor(dis/1000/60/60/24)
      let hour=Math.floor(dis/1000/60/60)
      let minutes=Math.floor(dis/1000/60)
      if(days) return `${days}天`
      if(hour) return `${hour}小时`
      if(minutes) return `${minutes}分钟`
      return `当`
    },
    getOwner(){
     const action = getOwnerList()
      dispatch(action)
    },
    changeLoading(val){
      const action = changeLoadingShow(val)
      dispatch(action)
    },
    handleChange(event){
      let val = event.target.value.replace(/\s+/g,'')  //禁止输入空格
      const action =changeInput(val)
      dispatch(action)
    },
    handlesearch(value){
      if(value === ''){
        message.info('This is a error message');
        return
      }
      const action = getFilterOwnerList(value)
      dispatch(action)
    },
    handlePress(search,value,event){
      if(event.charCode === 13){
         search(value)
      }
    }
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(List);