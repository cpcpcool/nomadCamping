import React, { useState, useEffect } from 'react';
import { ConfigProvider, Layout, Menu } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';

const { Header } = Layout;

const items1 = [
  {
    key: 'notice',
    label: <a href='/notice'>공지사항</a>,
  },

  {
    key: 'booking',
    label: <a href='/booking'>캠핑예약</a>,
  },
  {
    key: 'mypage',
    label: <a href='/mypage'>마이페이지</a>,
    className: 'mypageStyle',
    children: [
      {
        type: "group",
        label: '',
        key: 'option:1',
        children: [
          {
            label: '예약 확인',
            key: 'submp:1',
            className: 'submp1',
          },
          {
            label: '예약 변경/취소',
            key: 'submp:2',
            className: 'submp2',
          },
          {
            label: <a href='/mypage'>결제수단 관리</a>,
            key: 'submp:3',
            className: 'submp3',
          },
        ]
      },
    ],
  },
];

const navbarLiStyle = {
  display: 'inline-block',
  paddingLeft: '15px',
  textAlign: 'center',
  height: '10px',
  lineHeight: '10px',
};

const NavBar = () => {
  const [selectedKey, setSelectedKey] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/notice') {
      setSelectedKey('notice');
    } else if (currentPath === '/booking') {
      setSelectedKey('booking');
    } else if (currentPath === '/mypage') {
      setSelectedKey('mypage');
    }
  }, []);

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <>
      <div style={{ position: 'relative', textAlign: 'center', }}>
        <ul style={{ listStyle: 'none', padding: '0', position: 'absolute', right: '0', marginRight: '50px', }}>
          <li style={navbarLiStyle}><a href='/'><AiOutlineSearch style={{ color: '#000', textDecoration: 'none', padding: '5px 10px', fontSize: '1.5em', position: 'relative', top: '10px', textAlign: 'center' }} /></a></li>
          <li style={navbarLiStyle}><a href='/login' style={{ color: '#fff', textDecoration: 'none', padding: '5px 10px', borderRadius: '8px 8px 8px 8px', backgroundColor: '#2FA599', }}>login</a></li>
          <li style={navbarLiStyle}><a href='/' style={{ color: '#fff', textDecoration: 'none', padding: '5px 10px', borderRadius: '8px 8px 8px 8px', backgroundColor: '#2FA599', }}>사이트맵</a></li>
        </ul>
        <a href='/'>
          <img style={{ width: '204px', height: '132px', }} src='./img/cmadLogo.png' alt='logo' />
        </a>
      </div>

      <Layout style={{ marginTop: '10px', }}>
        <Header
          style={{
            width: '100%',
            height: '100%',
            margin: '0 auto',
            background: 'white',
            borderTop: '3px solid #ddd',
            padding: '0',
          }}
        >
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: '#2FA599',
                borderRadius: 2,
                fontSize: '1.5em',
                lineWidth: 3.2,
                lineType: 'solid',
                motionEaseIn: .7,

                // sub메뉴에 왜 안먹히는지
                groupTitleColor: 'rgba(46, 168, 156, 1)',
                dropdownWidth: 110,
                groupTitleFontSize: 10,
                dangerItemColor: '#2fa599',
                subMenuItemBorderRadius: 12,

                // Alias Token
                colorBgContainer: '#f6ffed',
              },
            }}
          >

            <Menu style={{
              display: 'flex',
              justifyContent: 'center',
              background: '#F6FFED',
              fontWeight: 'bold',
            }}
              mode="horizontal"
              defaultSelectedKeys={[0]}
              items={items1}
              onClick={handleMenuClick}
              selectedKeys={[selectedKey]}
            >
            </Menu>
          </ConfigProvider>
        </Header>
      </Layout>
    </>
  );
};

export default NavBar;