import { SearchOutlined } from '@ant-design/icons';
import { HomeOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Input, Select, Space, Table, Tag, Breadcrumb } from 'antd';
import React from 'react';

const onSearch = (value, _e, info) => console.log(info?.source, value);

const options1 = [
  { value: 'aa', label: '제목 + 내용', },
  { value: 'bb', label: '제목', },
  { value: 'cc', label: '내용', },
  { value: 'dd', label: '작성자', },
];

const options2 = [
  { value: '11', label: '공지', },
  { value: '22', label: '이벤트', },
  { value: '33', label: 'FAQ', },
];

const searchButton = (
  <SearchOutlined style={{ fontSize: 25, }}
  />
);

const columns = [
  {
    title: '카테고리',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 12,
          },
        }}
      >
        <>
          {tags.map((tag) => {
            let color = '';
            if (tag === 'notice') {
              color = '#2fa599';
            } else if (tag === 'event') {
              color = '#2f2598';
            } else if (tag === 'faq') {
              color = '#2f7597';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      </ConfigProvider>
    ),
  },
  {
    title: '제 목',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '작성자',
    dataIndex: 'writer',
    key: 'writer',
    align: 'center',
  },
  {
    title: '등록일',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
  },
  {
    title: '조회수',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
];
const data = [
  {
    key: '1',
    name: '캠핑유목민 공지입니다',
    age: 32,
    writer: '관리자',
    date: '2023-10-29',
    tags: ['notice'],
  },
  {
    key: '2',
    name: '캠핑유목민 자주하는 질문입니다',
    age: 42,
    writer: '관리자',
    date: '2023-08-26',
    tags: ['faq'],
  },
  {
    key: '3',
    name: '캠핑유목민 이벤트 입니다',
    age: 132,
    writer: '관리자',
    date: '2023-07-24',
    tags: ['event'],
  },
];

const Notice = () => (
  <>

    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#2FA599',
          borderRadius: 8,
          footerBg: 'rgba(255, 255, 255,.5)',
          bodySortBg: '#2fa599',

          // Alias Token
          colorBgContainer: '#fefefe',
        },
      }}
    >
      <div style={{ position: 'absolute', right: '0', top: '185px', }}>
        <Breadcrumb
          style={{
            display: 'block',
            float: 'right',
            paddingRight: '15px',
            paddingTop: '20px',
            height: '15px',
            lineHeight: '15px',

          }}
        >
          <Breadcrumb.Item><HomeOutlined /> Home</Breadcrumb.Item>
          <Breadcrumb.Item>마이페이지</Breadcrumb.Item>
          <Breadcrumb.Item>결제관리</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className='searchBox' style={{ textAlign: 'center', marginTop: '80px', }}>
        <Space.Compact
          enterButton={searchButton}
          allowClear
          onSearch={onSearch}
        >
          <Select defaultValue="제목 + 내용" options={options1} />
          <Select defaultValue="게시글 분류" options={options2} style={{ width: '150px', }} />
          <Input placeholder="내용을 입력해주세요" />
          <Button type="primary">{searchButton}</Button>
        </Space.Compact>
      </div>

      <hr style={{ width: '150px', marginTop: '80px', }} />
    </ConfigProvider>


    <ConfigProvider
      theme={{
        token: {
          borderRadius: 0,
          padding: 28,
          bodySortBg: '#2fa599',
          footerBg: 'rgba(255, 255, 255,.5)',
          marginRight: 30,
        },
      }}
    >
      <div style={{ width: '100%', marginTop: '80px', }}>

        <Table columns={columns} dataSource={data} style={{ textAlign: 'center', margin: '0 auto', width: '85%', }} />;
      </div>
    </ConfigProvider>

  </>
);
export default Notice;