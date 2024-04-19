import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { UserOutlined, UnorderedListOutlined, LogoutOutlined, HomeOutlined, CopyOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
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
  
  return (
    <Layout style={{ minHeight: '100vh', }}    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
        <h1 className="text-center text-white font-bold m-4 text-2xl">SHEKHAR MOBILE</h1>
        </div>
        <Menu mode="inline" theme="dark" items={navMenu} />
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, background: colorBgContainer }} />
        
        
        <Content style={{ margin: '0 16px',  }} >
          <Breadcrumb style={{margin: '16px 0', }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center', }} > Ant Design ©{new Date().getFullYear()} Created by Ant UED </Footer>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
