import "./Formularios.css"; 
import React, {useState} from 'react'
import {Button, Modal} from 'antd';
import {Form, Input} from 'antd';

const ButtonMostrar=()=>{
    
    const[OpenModal,EstadoModal]=useState(false);
    return(
        <>
            <Button className='FormularioBoton' onClick={()=>EstadoModal(true)}><h1>+</h1></Button>
            <Modal centered
            open={OpenModal} onOk={()=>EstadoModal(false)} onCancel={()=>EstadoModal(false)}>
            
            <Form className='formu' data-form>
                <h2 className='titulo'>Creación de blogs</h2>
                <Form.Item className='log'>
                    <label className='lab'>Titulo</label>
                    <Input className="ppf" placeholder='Ingrese un titulo del blog'id="titulo" name='titulo' data-titulo/>
                </Form.Item>
                <Form.Item className='log'>
                    <label className='lab'>Enlace</label>
                    <Input className="ppf" placeholder='Ingrese el enlace de la imagen'id="imagen" name='imagen' data-imagen/>
                </Form.Item>
                <Form.Item className='log'>
                    <label className='lab'>Descripción</label>
                    <Input className="ppf" placeholder='Ingrese el mensaje del blog'id="descripcion" name='descripcion'data-descripcion/>
                </Form.Item>
                <Form.Item className='log'>
                    <label className='lab'>Autor</label>
                    <Input className="ppf" placeholder="Ingrese su usuario" id="autor" name="autor" data-autor/>
                </Form.Item>
                <Form.Item className='boton'>
                    <Button className='btn' type="submit">Enviar</Button>
                </Form.Item>
            </Form>
            </Modal>
        </>
    );
}
export default ButtonMostrar;