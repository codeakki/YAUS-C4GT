import { Table, Button} from 'antd';
import React ,{useState} from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { NavLink, useLocation } from "react-router-dom";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: 'white',
    }}
  />
);
const onSearch = (value) => console.log(value);



const App = () => 
(
    
<>

<NavLink to="/LinkCreate"><Button type="primary">
        Create Your Link
      </Button>
</NavLink>
      <br></br>
      <br></br>
      <br></br>
      
    <Search
      placeholder="Search"
      onSearch={onSearch}
      suffix={suffix}
      enterButton 
      style={{
        width: 320,
      }}
    />
    <br></br>
    <br></br>
<Table columns={columns} dataSource={data} onChange={onChange} />;

</>
)

const columns = [
    {
        title: 'Created',
        dataIndex: 'date',
        sorter: (a, b) => a.age - b.age,
      },
  {
    title: 'Marketing Title',
    dataIndex: 'name',
    filters: [
      {
        text: 'Samagra Website',
        value: 'Samagra Website',
      },
      {
        text: 'My First Link',
        value: 'My First Link',
        
      },
      {
        text: 'Competency Passbook',
        value: 'Competency Passbook',
       
      },
      {
        text: 'Hackerank',
        value: 'Hackerank',
       
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: '30%',
  },
  
  {
    title: 'Short URL',
    dataIndex: 'url',
    filters: [
      {
        text: 'samagra',
        value: 'https://yaus.xyz/samagra',
        
      },
      {
        text: 'first',
        value: 'https://yaus.xyz/first',
      },
      {
        text: 'pass',
        value: 'https://yaus.xyz/pass',
      },
      {
        text: 'hack',
        value: 'https://yaus.xyz/hack',
      },
    ],
    onFilter: (value, record) => record.url.startsWith(value),
    filterSearch: true,
    width: '40%',
  },
  {
    title: 'Clicks',
    dataIndex: 'clicks',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Opens',
    dataIndex: 'open',
    sorter: (a, b) => a.age - b.age,
  },
];
const data = [
  {
    date:"2022-07-09",
    name:"Samagra Website",
    url:<a href="https://yaus.xyz/samagra">https://yaus.xyz/samagra</a>,
    clicks:"10",
    open:"4"
  },
  {
    date:"2022-06-22",
    name:"My First Link",
    url:<a href="https://yaus.xyz/first">https://yaus.xyz/first</a>,
    clicks:"5",
    open:"7"
  },
  {
    date:"2022-07-19",
    name:"Competency Passbook",
    url:<a href="https://yaus.xyz/pass">https://yaus.xyz/pass</a>,
    clicks:"30",
    open:"3"
  },
  {
    date:"2022-07-03",
    name:"Hackerank",
    url:<a href="https://yaus.xyz/hack">https://yaus.xyz/hack</a>,
    clicks:"12",
    open:"8"
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};


    
      
      
    
  

export default App;
