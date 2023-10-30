import React from 'react'
import { Col, Card } from 'antd';

const { Meta } = Card;

const AntCard = (props) => {
  return (
    <Col xs={12} sm={10} md={6} lg={4}>
      <a href="#" style={{ display: 'block', }}>
        <Card
          hoverable
          style={{ width: '240px', }}
          cover={<img style={{ width: '100%', height: '220px', }} alt={props.campName} src={props.path} />}
        >
          <Meta
            title={props.campName}
            description={props.campAddr}
            style={{ fontSize: '0.8rem', }}
          />
        </Card>
      </a>
    </Col>
  )
}

export default AntCard