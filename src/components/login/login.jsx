import React, { Component } from 'react'

import './login.css'

import { Form } from 'semantic-ui-react'

import axios from 'axios'
export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      uname: 'tom',
      pwd: '123'
    }
  }
  login = () => {
    axios.post('users/login', this.state).then(res => {
      if (res.data.meta.status === 200) {
        //保存token及ID到本地
        localStorage.setItem('mytoken', res.data.data.token)
        localStorage.setItem('uid', res.data.data.uid)
        //跳转到布局组件
        this.props.history.push('/layout')
      }
    })
  }
  changeValue = event => {
    this.setState({
        [event.target.name]:event.target.value
    })
  }
  render() {
    const { uname, pwd } = this.state
    return (
      <div className="login-container">
        <div className="login-title">登录</div>
        <div className="login-form">
          <Form onSubmit={this.login}>
            <Form.Field>
              <Form.Input
                required
                icon="user"
                size="big"
                name="username"
                iconPosition="left"
                value={uname}
                onChange={this.changeValue}
                placeholder="请输入用户名"
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                required
                type="password"
                icon="lock"
                size="big"
                name="password"
                iconPosition="left"
                value={pwd}
                onChange={this.changeValue}
                placeholder="请输入密码"
              />
            </Form.Field>
            <Form.Button positive content="登录" />
          </Form>
        </div>
      </div>
    )
  }
}
