import React, { Component,Fragment} from 'react';
import { Layout} from 'antd';
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import Breadcrumb from '../components/Breadcrumb'
import Sider from '../components/Sider'
import {changeHeaderKey} from '../store/actionCreator'


const { Content, Footer} = Layout;
class Index extends Component {
 
  componentWillMount(){
    this.props.changeKey()
  }
  render() { 
    return ( 
      <Fragment>
        {/* <Redirect from="/" to="/index/todolist"/> */}
        
        <Layout>
          <Content style={{ padding: '0 50px'}}>
            <Breadcrumb></Breadcrumb>
            <Layout style={{ padding: '24px 0', background: '#fff',height:800 }}>
              <Sider/>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                {
                  this.props.children
                }
              </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>

      </Fragment>

    )
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    changeKey(){
      const action=changeHeaderKey(1)
      dispatch(action)
    }
  }
}
export default connect(null,mapDispatchToProps)(Index);