import React, { useState} from 'react';
import { Button } from 'antd';
import Header from '../components/Header/index';
import {  Breadcrumb, Layout, Menu, theme  } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

const { Content, Footer } = Layout;

function Home() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

    const [wordOfTheDay, setWordOfTheDay] = useState('');
    const [definition, setDefinition] = useState('');

    const handleClick = () => {
    fetch("https://word-of-the-day2.p.rapidapi.com/word/today", {
    "method": "GET",
    "headers": {
        'X-RapidAPI-Key': '426d28183dmsh7bb9fc73c777885p187cabjsne3940bffb164',
		'X-RapidAPI-Host': 'word-of-the-day2.p.rapidapi.com'
    },
    })
    .then((response) => response.json())
    .then((data) => {console.log(data);
    setWordOfTheDay(data[1].word);
    setDefinition(data[1].mean);
    })
    .catch((err) => console.log(err));
};

    return (
        <Layout className="layout">
        <Menu theme="dark" 
    mode="horizontal"defaultSelectedKeys={['1']}
    items={[
      {
        key: '1',
        icon: <UserOutlined />,
        label: 'Login',
      },
      {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'Signup',
      }
    ]}>
    </Menu>
        
        <Header/>
        
        <div className='home'>
            <Button size="lg" type="primary" onClick={handleClick}>Generate Word of The Day</Button>
            <h1>{wordOfTheDay}:</h1>
            <p>{definition}</p>
        </div>
        <Content
          style={{
            padding: '0 50px',
          }}
        ><Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Your</Breadcrumb.Item>
            <Breadcrumb.Item>Knowledge</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
            }}
          >

            Test your Knowledge with our amazing flashcard app!!
            We have a collection of flashcard decks for every topic! 
            Use the searchbar to find a deck for you.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    );
}

export default Home;
