import React, { useState } from 'react';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Blog', 'sub1', <></>, [
    getItem('Inicio', '1'),
    getItem('CrearBlog', '2'),
    getItem('Cerrar', '3'),
  ]),
];
const MenuBlog = () => {
  const [current, setCurrent] = useState('1');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
          
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};
export default MenuBlog;