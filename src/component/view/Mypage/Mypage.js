import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, ConfigProvider, Layout, Menu, Space, theme } from 'antd';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlinePlusCircle } from 'react-icons/ai';
import { MdAccountBox } from 'react-icons/md';

const { Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('마이페이지', '1', <MdAccountBox style={{ fontSize: '2em', }} />, [
    getItem('예약 확인', 'sub1'),
    getItem('예약 변경 / 취소', 'sub2'),
    getItem('결제수단 관리', 'sub3'),
  ]),
];



function Mypage() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#2FA599',
            borderRadius: 8,
            groupTitleFontSize: 12,
            // Alias Token
            colorBgContainer: '#fefefe',
          },
        }}
      >
        <Layout style={{ marginTop: '10px', }}>
          <Content
            style={{
              padding: '0px',
            }}
          >
            <Breadcrumb
              style={{
                display: 'block',
                textAlign: 'right',
                paddingRight: '15px',
                paddingTop: '20px',
                float: 'right',
              }}
            >
              <Breadcrumb.Item href="/"><HomeOutlined /> Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/mypage">마이페이지</Breadcrumb.Item>
              <Breadcrumb.Item>결제관리</Breadcrumb.Item>
            </Breadcrumb>

            <Layout
              style={{
                padding: '24px 0',
                background: colorBgContainer,
                marginTop: '60px',
                height: 'calc(100vh - 80px)',
              }}
            >
              <Sider
                style={{
                  background: colorBgContainer,
                }}
                width={200}
              >
                <Menu
                  style={{
                    width: 256,
                    height: '100%',
                  }}
                  defaultOpenKeys={['1']}
                  defaultSelectedKeys={['sub3']}
                  mode="inline"
                  items={items}
                />
              </Sider>
              <Content
                style={{
                  paddingLeft: '220px',
                  minHeight: 280,
                }}
              >
                <Space
                  direction="vertical"
                  style={{
                    width: '50%',
                    marginLeft: '170px',
                  }}
                >
                  <div style={{ position: 'relative', height: '300px', backgroundColor: '#2fa599', borderRadius: '12px 12px 12px 12px', color: '#fff', }}>
                    <div style={{ paddingTop: '30px', paddingLeft: '30px', fontSize: '2em', fontWeight: 'bold', }}> CAM U PAY 잔액 </div>
                    <div style={{ paddingTop: '30px', paddingLeft: '30px', fontSize: '3.5em', fontWeight: 'bold', fontStyle: 'italic', }}> 12,030 원 </div>
                    <Space style={{ float: 'right', position: 'relative', right: '30px', top: '50px', }}>
                      <Button type="primary" size="large" style={{ backgroundColor: '#1ABC9C', }}> <AiOutlinePlus /> 충전하기 </Button>
                      <Button type="primary" size="large" style={{ backgroundColor: '#1ABC9C', marginLeft: '10px', }}> <AiOutlineMinus /> 출금하기 </Button>
                    </Space>
                  </div>
                  <Button block style={{ display: 'flex', justifyContent: 'center', height: '2em', fontSize: '1.7em', }}>
                    <span style={{ marginRight: '20px', }}>계좌 등록</span>
                    <AiOutlinePlusCircle />
                  </Button>
                  <Button block style={{ display: 'flex', justifyContent: 'center', height: '2em', fontSize: '1.7em', }}>
                    <span style={{ marginRight: '20px', }}>카드 등록</span>
                    <AiOutlinePlusCircle />
                  </Button>
                  <Button block style={{ display: 'flex', justifyContent: 'center', height: '2em', fontSize: '1.7em', }}>
                    <span style={{ marginRight: '20px', }}>간편결제 등록</span>
                    <AiOutlinePlusCircle />
                  </Button>
                </Space>
              </Content>
            </Layout>
          </Content>
        </Layout>
      </ConfigProvider>
    </div>
  )
}

export default Mypage
