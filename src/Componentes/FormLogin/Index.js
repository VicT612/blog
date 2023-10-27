import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './FormLogin.css'
const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1>Bienvenido de nuevo👋</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Contraseña"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Recuerdame</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Olvide mi Contraseña
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" block htmlType="submit" className="login-form-button">
          Ingresar
        </Button >
         <a href="">Registrarse</a>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;