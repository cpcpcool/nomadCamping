import React from 'react';
import { Button, Checkbox, Form, Input, ConfigProvider } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#2FA599',
        borderRadius: 12,

        // Alias Token
        colorBgContainer: '#eff0ef',
      },
    }}
  >
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        position: 'relative',
        right: '90px',
        margin: '0 auto',
        marginTop: '180px',
        maxWidth: 600,


      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label=" 아이디 "
        name="username"
        rules={[
          {
            required: true,
            message: '아이디를 입력해주세요!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label=" 비밀번호 "
        name="password"
        rules={[
          {
            required: true,
            message: '비밀번호를 입력해주세요!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        style={{ textAlign: 'left' }}
      >
        <Checkbox>로그인 정보 기억</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        style={{
          textAlign: 'center',
          position: 'relative',
          right: '10px',
        }}
      >
        <Button type="primary" htmlType="submit" href='/'>
          로그인
        </Button>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        style={{
          marginTop: '180px',
          marginLeft: '50px',
        }}
      >
        <Button type="default" htmlType="reset" href='/login'
          style={{
            margin: '0 30px',
          }}>
          아이디 찾기
        </Button>
        <Button type="default" htmlType="reset" href='/login'
          style={{
            margin: '0 30px',
          }}>
          비밀번호 찾기
        </Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);

export default Login;