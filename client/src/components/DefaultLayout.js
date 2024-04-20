import React, { useState } from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import { UserOutlined, UnorderedListOutlined, LogoutOutlined, HomeOutlined, CopyOutlined, ShoppingCartOutlined, MenuFoldOutlined,
  MenuUnfoldOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;


const DefaultLayout  = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();

  const navMenu = [
    { label: <Link to="/">Home</Link>, icon: <HomeOutlined />, key: 'home' },
    { label: <Link to="/bills">Bills</Link>, icon: <CopyOutlined />, key: 'bills' },
    { label: <Link to="/items">Items</Link>, icon: <UnorderedListOutlined />, key: 'items' },
    { label: <Link to="/customers">Customers</Link>, icon: <UserOutlined />, key: 'customers' },
    { label: 'Logout', icon: <LogoutOutlined />, key: 'logout' },
  ];

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const cartItems = useSelector(store => store.cart.items)
  
  return (
    <Layout style={{ minHeight: '100vh', }}    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
        <h1 className="text-center text-white font-bold m-4 text-2xl">SHEKHAR MOBILE</h1>
        </div>
        <Menu mode="inline" theme="dark" items={navMenu} />
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background flex justify-between" style={{ padding: 0, background: colorBgContainer }}>
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='mr-12 flex'>
          <Link to="/cart" ><ShoppingCartOutlined className='scale-150' /> </Link>
            <p className='mx-2 font-bold'> {cartItems.length}</p>
          </div>
        </Header>      
        
        <Content style={{ margin: '0 16px',  }} >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center', }} > Shekhar Mobile Shop ©{new Date().getFullYear()} Created by Chandra Shekhar </Footer>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
