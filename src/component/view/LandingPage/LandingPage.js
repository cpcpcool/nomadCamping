import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import React from 'react';
import { ConfigProvider, Input, Space } from 'antd';
import Link from 'antd/es/typography/Link';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const searchButton = (
  <SearchOutlined
    style={{
      fontSize: 25,
    }}
  />
);

const handleSearchButton = () => {
  window.location.href = '/bookIng';
};
const onSearch = (value, _e, info) => console.log(info?.source, value);


const LandingPage = () => {


  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#2FA599',
            borderRadius: 8,
            // fontSize: '1.5em',
            // lineWidth: 3.2,
            // lineType: 'solid',
            // sizePopupArrow: 16,
            // Link: '/#',
            // lineWidthFocus: 'focus',

            // Alias Token
            colorBgContainer: '#fefefe',
          },
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          backgroundImage: 'url(./img/DesignThinking.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}>
          <Space size="large">
            {<Search
              placeholder="  캠핑장 검색"
              allowClear
              enterButton={searchButton}
              size="large"
              onSearch={handleSearchButton}
              style={{
                width: '800px',
                padding: '190px'
              }}

            />}
          </Space>
        </div>
        <div style={{ display: 'flex', width: '100%', height: '500px', marginTop: '30px', }}>
          <div className='left' style={{ width: '30%', paddingTop: '50px', borderRight: '3px dashed #ddd', overflow: 'hidden', boxSizing: 'border-box' }}>

            <p style={{ margin: '0', fontSize: '22px', fontWeight: 'bold', textAlign: 'center', paddingBottom: '30px', }}> <a href='\booking' style={{ textDecoration: 'none', color: '#000', }}> 대한민국 캠핑지도</a></p>
            <a href="/booking" style={{ display: 'block', margin: '0 auto', textAlign: 'center', }}><img src="./img/campingmap.png" alt='campingmap' /></a>
          </div>

          <div className='right' style={{ width: '70%', overflow: 'hidden', boxSizing: 'border-box', }}>
            <div style={{ textAlign: 'center', paddingTop: '50px', fontSize: '22px', fontWeight: 'bold', }}
            ><a href='\booking' style={{ textDecoration: 'none', color: '#000', }}>
                인기 예약 캠핑장 추천
              </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', paddingTop: '140px', }}>
              <a href='\booking' style={{ textDecoration: 'none', color: '#000', }}>
                <img src="./img/캠핑장1.png" alt='camping1' style={{ width: '250px', height: '150px', }} />
                <h3 style={{ textAlign: 'center', }}>가평 😊😊 캠핑장</h3>
              </a>
              <a href='\booking' style={{ textDecoration: 'none', color: '#000', }}>
                <img src="./img/캠핑장2.png" alt='camping2' style={{ width: '250px', height: '150px', }} />
                <h3 style={{ textAlign: 'center', }}>청평 🎶🎶 캠핑장</h3>
              </a>
              <a href='\booking' style={{ textDecoration: 'none', color: '#000', }}>
                <img src="./img/캠핑장3.png" alt='camping3' style={{ width: '250px', height: '150px', }} />
                <h3 style={{ textAlign: 'center', }}>대성리 😶‍🌫️😶‍🌫️ 캠핑장</h3>
              </a>
            </div>
          </div>
        </div>

      </ConfigProvider >
    </>

  )
};

export default LandingPage