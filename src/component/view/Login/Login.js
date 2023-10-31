import React from 'react';
import { Button, Checkbox, Form, Input, ConfigProvider } from 'antd';
import { SiNaver } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';
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
        fontFamily: 'S-CoreDream-4Regular',
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

        margin: '0 auto',
        marginTop: '180px',
        marginLeft: '700px',
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
        style={{
          textAlign: 'left',
        }}
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

        <Button type="primary" htmlType="submit" href='/' style={{ marginLeft: '20px', }}>
          로그인
        </Button>
        <div className="snsLogin" style={{ margin: '30px auto', marginLeft: '15px', }}>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: '#2FA599',
                borderRadius: 4,
                fontFamily: 'S-CoreDream-4Regular',
                // Alias Token
                colorBgContainer: '#eff0ef',
              },
            }}
          >
            <Button type="primary" block style={{ backgroundColor: "#27D34A", height: '45px', lineHeight: '30px', marginBottom: '10px', fontWeight: '600', }}><SiNaver style={{ float: 'left', textAlign: 'left', height: '30px', lineHeight: '30px', }} />네이버 로그인</Button>
            <Button type="primary" block style={{ backgroundColor: "#FFEB00", height: '45px', lineHeight: '30px', marginBottom: '10px', color: '#000', fontWeight: '600', }}><RiKakaoTalkFill style={{ float: 'left', textAlign: 'left', height: '30px', lineHeight: '30px', fontSize: '1.4em', }} />카카오 로그인</Button>
          </ConfigProvider>
        </div>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        style={{
          textAlign: 'center',
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
          }}>
          비밀번호 찾기
        </Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);

export default Login;