import React, { useState } from "react"
import ReactDOM from "react-dom";

import { useNavigate } from "react-router-dom";

import {
  Form,
  Input,
  Button,
  Selector
} from 'antd-mobile'


import useCountStore from "../../stores/counterStore.jsx";
import useUserStore from "../../stores/userStore.jsx";
import "./style.css"

const Login = () => {
  const navigate = useNavigate();
  const inc = useCountStore(state => state.increment)
  const counter = useCountStore(state => state.count)
  const addUser = useUserStore(state => state.addUser)
  const setUserInfo = useUserStore(state => state.setUserInfo)
  const users = useUserStore(state => state.users)
  const [open, setOpen] = useState(false);

  const onFinish = (values) => {
    addUser({
      name: values.username,
      password: values.password
    })
    setUserInfo({
      name: values.username,
      password: values.password
    })
    console.log('Success:', values);
    navigate('/main', {state: {name: values.name}})
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onCountHandler = ()=> {
    inc(2)
  }
  const createPortalHandler =()=> {

  }
  const Modal = ({ message, isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
      <div className="modal">
        <div className='h2'>{message}</div>
        <button onClick={onClose}>Close</button>
      </div>,
      document.body
    );
  };
  const PropRender = function(prop) {
    console.log("Prop render:",prop)
    return (
      <>
        <div>{prop.name()}</div>
      </>
    )
  }
  return (
      <Form
          name='form'
          onFinish={onFinish}
          footer={
            <Button block type='submit' color='primary' size='large'>
              提交
            </Button>
          }
      >
        <Form.Header>登陆</Form.Header>
        <Form.Item name='name' label='姓名' rules={[{ required: true }]}>
          <Input placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='address' label='密码' help='密码'>
          <Input placeholder='请输入密码' />
        </Form.Item>
        <Form.Item name='favoriteFruits' label='三方登陆'>
          <Selector
              columns={3}
              multiple
              options={[
                { label: '微信', value: 'apple' },
                { label: '邮箱', value: 'orange' },
                { label: 'Apple', value: 'banana' },
              ]}
          />
        </Form.Item>

      </Form>
  );
};
export default Login;

