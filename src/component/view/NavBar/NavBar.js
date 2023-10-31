import React, { useState, useEffect } from 'react';
import { ConfigProvider, Layout, Menu } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
import './../../../App.css';

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
  const [selectedMenu, setSelectedMenu] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/notice') {
      setSelectedMenu('notice');
    } else if (currentPath === '/booking') {
      setSelectedMenu('booking');
    } else if (currentPath === '/mypage') {
      setSelectedMenu('mypage');
    }
  }, []);

  const handleMenuClick = (e) => {
    setSelectedMenu(e.menu);
  };

  return (
    <>
      <div style={{ position: 'relative', textAlign: 'center', }}>
        <ul style={{ listStyle: 'none', padding: '0', position: 'absolute', right: '0', marginRight: '50px', }}>
          <li style={navbarLiStyle}><a href='/booking'><AiOutlineSearch style={{ color: '#000', textDecoration: 'none', padding: '5px 10px', fontSize: '1.5em', position: 'relative', top: '10px', textAlign: 'center' }} /></a></li>
          <li style={navbarLiStyle}><a href='/login' style={{ color: '#fff', textDecoration: 'none', padding: '5px 10px', borderRadius: '8px 8px 8px 8px', backgroundColor: '#2FA599', }}>login</a></li>
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
                fontFamily: 'S-CoreDream-4Regular',
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
              selectedKeys={[selectedMenu]}
            >
            </Menu>
          </ConfigProvider>
        </Header>
      </Layout>
    </>
  );
};

export default NavBar;