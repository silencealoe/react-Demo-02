import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import {changeHeaderShow} from '@/store/actionCreator'
class Login extends Component {
  constructor(props) {

    super(props);
    this.state = {
      username:'',
      password:''
    }
  }
  componentWillMount(){
    this.props.headerShow(false)
  }
  componentWillUnmount(){
    this.props.headerShow(true)
  }

  handleUsernameChange(e){
    console.log(e.target.value)
    this.setState({
      username:e.target.value
    })
  }
  handlePasChange(e){
    console.log(e.target.value)
    this.setState({
      password:e.target.value
    })
  }
  handleSubmit(){
    if(this.state.username==='hui'&&this.state.password==='123'){
      this.props.history.push('/index')
    }
  }
  render() { 
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login_logo">
          <img src={[require('../../static/img/login_logo.png')]} alt="bms" width="260" height="80" />
        </div>
        <div className="loginBox">
          <h2 className="login_title">welcome</h2>
          <div className="input_wrap">
           <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
            <Form.Item>
              {
              getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })
              (
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
                  placeholder="username"
                  style={{height:40}}
                  onChange={this.handleUsernameChange.bind(this)}
                />
              )}
              </Form.Item>
              <Form.Item>
                {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })
                (
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    style={{height:40}}
                    onChange={this.handlePasChange.bind(this)}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })
                (<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
           </div>
        </div>
      </div>
    );
  }
}
const LoginWrap=Form.create({name:'normal_login'})(Login)
const mapDispatchToProps=(dispatch)=>{
  return{
    headerShow(val){
      const action = changeHeaderShow(val)
      dispatch(action)
    }
  }
}
 
export default connect(null,mapDispatchToProps)(LoginWrap);
