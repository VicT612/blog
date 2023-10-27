import React from 'react';
import { Col, Row } from 'antd';
import "./Inicio.css"
import MenuBlog from '../Menu/Index';
import ButtonMostrar from '../Formulario/Index';

import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const Inicio = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: '#2E2E48',
        }}
      >
        <div className="demo-logo-vertical" />
        <img className='imgLogo' src='https://i.ibb.co/68FjVzW/BLOG-1.png' alt='img'></img>
        <MenuBlog></MenuBlog>
        
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: '#2E2E48',
          }}
        ><h1 className='title-header'>Blogs</h1></Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
            }}
          >
           <Row className='miniBlog'>
                <Col span={18} push={6}>
                    <h5 className='dateMiniBLog'>1 Mar 2022</h5>
                    <h3 className='titleMiniBlog'>Blog Generado</h3>
                </Col>
                <Col span={6} pull={18}>
                    <img className='imgMiniBlog' src='https://i.ibb.co/68FjVzW/BLOG-1.png' alt='img'></img>
                </Col>
            </Row>
            <Row className='miniBlog'>
                <Col span={18} push={6}>
                    <h5 className='dateMiniBLog'>1 Mar 2022</h5>
                    <h3 className='titleMiniBlog'>Blog Generado</h3>
                </Col>
                <Col span={6} pull={18}>
                    <img className='imgMiniBlog' src='https://i.ibb.co/68FjVzW/BLOG-1.png' alt='img'></img>
                </Col>
            </Row>
            <Row className='miniBlog'>
                <Col span={18} push={6}>
                    <h5 className='dateMiniBLog'>1 Mar 2022</h5>
                    <h3 className='titleMiniBlog'>Blog Generado</h3>
                </Col>
                <Col span={6} pull={18}>
                    <img className='imgMiniBlog' src='https://i.ibb.co/68FjVzW/BLOG-1.png' alt='img'></img>
                </Col>
            </Row>
            <Row className='miniBlog'>
                <Col span={18} push={6}>
                    <h5 className='dateMiniBLog'>1 Mar 2022</h5>
                    <h3 className='titleMiniBlog'>Blog Generado</h3>
                </Col>
                <Col span={6} pull={18}>
                    <img className='imgMiniBlog' src='https://i.ibb.co/68FjVzW/BLOG-1.png' alt='img'></img>
                </Col>
            </Row>
          </div>
        </Content>
        <ButtonMostrar></ButtonMostrar>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Blog ©2023
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Inicio;