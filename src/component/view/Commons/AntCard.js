import React from 'react'
import { Col, Card, Button, ConfigProvider, Rate } from 'antd';

const { Meta } = Card;

const AntCard = (props) => {
  return (
    <Col xs={12} sm={10} md={6} lg={4}>
      <a href="#" style={{ position: 'relative', display: 'block', height: '360px', }}>
        <Card
          hoverable
          style={{ width: '240px', fontFamily: 'S-CoreDream-4Regular', height: '360px', }}
          cover={<img style={{ width: '100%', height: '220px', }} alt={props.campName} src={props.path} />}
        >
          <Meta
            title={props.campName}
            description={props.campAddr}
            style={{ fontSize: '0.8rem', }}
          />
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: '#2FA599',
                borderRadius: 8,
                fontFamily: 'S-CoreDream-4Regular',
                fontSize: '.8em',

                // Alias Token
                colorBgContainer: '#fefefe',
              },
            }}
          >
            <Rate disabled defaultValue={props.score} style={{ fontSize: '1.2em', position: 'absolute', bottom: '10px', left: '25px', }} />
            <Button size='small' style={{ position: 'absolute', bottom: '10px', right: '10px', float: 'right', }}>예약하기</Button>
          </ConfigProvider>
        </Card>
      </a>
    </Col>
  )
}

export default AntCard