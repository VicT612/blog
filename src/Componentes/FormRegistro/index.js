import "./FormRegistro.css"
import React, { useState } from 'react';

import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  ConfigProvider
} from 'antd';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const FormRegistro = () => {
  
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      className='formRegistro'
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <h1>Crea una cuenta👋</h1>
      <Form.Item
        name="email"
        label="Correo"
        rules={[
          {
            type: 'email',
            message: 'Correo no Valido',
          },
          {
            required: true,
            message: 'Porfavor introduzca su Correo',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Contraseña"
        rules={[
          {
            required: true,
            message: 'Porfavor introduzca su contraseña',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirmar"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Por favor confirma tu contraseña',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('¡La nueva contraseña que ingresó no coincide!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nombre"
        label="Nombre"
        tooltip="Introduzaca su primer nombre"
        rules={[
          {
            required: true,
            message: 'Por favor introduzca su nombre',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="apellido"
        label="Apellido"
        tooltip="Introduzaca su apellido Paterno"
        rules={[
          {
            required: true,
            message: 'Por favor introduzca su Apellido',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Debe aceptar el acuerdo')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          He leido los <a href="">terminos de servicio</a> 
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormRegistro;