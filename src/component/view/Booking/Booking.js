import { HomeOutlined, SearchOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, ConfigProvider, Input, Row, Select, Space, } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AntCard from "../Commons/AntCard.js";
import { API_KEY, BASE_URL } from "./../../Config.js";

function Booking() {

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const options1 = [
    { value: 'aa', label: '지역별', },
    { value: 'bb', label: '분류별', },
    { value: 'cc', label: '이름 검색', },
  ];

  const searchButton = (
    <SearchOutlined style={{ fontSize: 25, }}
    />
  );

  const { contentId } = useParams();
  /* const [apiData, setApiData] = useState({}); */

  /* useEffect(() => {
    const endpointData = `${BASE_URL}numOfRows=3&pageNo=1&MobileOS=ETC&MobileApp=cmad&serviceKey=${API_KEY}&_type=json`;
    
    fetch(endpointData)
    .then(response => response.json())
    .then(data => {
      const items = data.response.body.items.item[2];
      setApiData(items);
      // console.log(items);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);
  */

  const [apiCard, setApiCard] = useState([]);

  useEffect(() => {
    const endpointData = `${BASE_URL}numOfRows=18&pageNo=1&MobileOS=ETC&MobileApp=cmad&serviceKey=${API_KEY}&_type=json`;

    fetch(endpointData)
      .then(response => response.json())
      .then(response => {
        const items = response.response.body.items.item;
        const exportCard = items.map(item => ({
          firstImageUrl: item.firstImageUrl,
          facltNm: item.facltNm,
          addr1: item.addr1,
          manageNmpr: item.manageNmpr
        }));
        setApiCard(exportCard);
        console.log(apiCard);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#2FA599',
            borderRadius: 8,
            footerBg: 'rgba(255, 255, 255,.5)',
            bodySortBg: '#2fa599',
            fontFamily: 'S-CoreDream-4Regular',
            fontWeight: 500,
            // Alias Token
            colorBgContainer: '#fefefe',
          },
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
          <Breadcrumb.Item href="/booking">캠핑예약</Breadcrumb.Item>
          <Breadcrumb.Item>캠핑장 검색</Breadcrumb.Item>
        </Breadcrumb>

        <hr style={{ border: '0', }} />
        <div className='searchBox' style={{ textAlign: 'center', marginTop: '80px', }}>
          <Space.Compact
            enterButton={searchButton}
            allowClear
            onSearch={onSearch}
            style={{ marginBottom: '50px', }}
          >
            <Select defaultValue="지역별" options={options1} style={{ width: '110px', textAlign: 'left', }} />
            <Input placeholder="내용을 입력해주세요" style={{ width: '430px', }} />
            <Button type="primary">{searchButton}</Button>
          </Space.Compact>
        </div>

      </ConfigProvider>

      {/* {apiData && (
        <MainImage
          image={apiData.firstImageUrl}
        />
      )} */}
      <div style={{ display: 'block', width: '80%', margin: '0 auto', marginTop: '50px', height: '1200px', }}>
        {apiCard && (
          <Row gutter={[10, 10]} style={{ height: '70px', }}>
            {apiCard
              .filter(card => card.firstImageUrl !== "")
              .map((card, index) => (
                <React.Fragment key={index}>
                  <AntCard
                    path={card.firstImageUrl}
                    campName={card.facltNm}
                    campAddr={card.addr1}
                    score={card.manageNmpr}
                    style={{ height: '70px', }}
                  />
                </React.Fragment>
              ))}
          </Row>
        )}
      </div>
    </>
  );
}
export default Booking;

