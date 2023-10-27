import React from 'react';
import { Col, Row } from 'antd';
import FormRegistro from '../FormRegistro';
import "./Registro.css"
const Registro = () => 
    <Row>
      <Col className='colLeft' span={16} push={8}>
        <img className='imagen' src="https://cdn.websites.hibu.com/97df2096307b4f18a0f85bf1ed3dceb8/dms3rep/multi/blog-c341ba1a.png" alt='img'/>
      </Col>
      <Col className='colRight' span={8} pull={16}>
        <FormRegistro></FormRegistro>
      </Col>
    </Row>
export default Registro;