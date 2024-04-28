import React from 'react';
import { Space, Table, Tag } from 'antd';

const columns = [
  {
    title: 'Kullanıcı Adı',
    dataIndex: 'username',
    key: 'username',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'E-posta',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Roller',
    dataIndex: 'rolls',
    key: 'rolls',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    username: 'John Brown',
    email: "deneme@gmail.com",
    rolls: 'admin',
    
  },
  {
    key: '2',
    username: 'Jim Green',
    email: "deneme@gmail.com",
    rolls: 'admin',
    tags: ['loser'],
  },
  {
    key: '3',
    username: 'Joe Black',
    email: "deneme@gmail.com",
    rolls: 'Super Admin',
    tags: ['cool', 'teacher'],
  },
];
const MyTable = () => <Table columns={columns} dataSource={data} />;
export default MyTable