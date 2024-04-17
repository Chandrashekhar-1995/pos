// import React, { useState } from 'react';
// import { Layout, Menu } from 'antd';
// import {
//   HomeOutlined,
//   CopyOutlined,
//   UnorderedListOutlined,
//   UserOutlined,
//   LogoutOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
// } from '@ant-design/icons';
// import { Link } from 'react-router-dom';

// const { Header, Sider, Content } = Layout;

// const DefaultLayout = ({ children }) => {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggle = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <Layout>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="logo">
//           <h1 className="text-center text-light font-weight-bold mt-4">POS</h1>
//         </div>
//         <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
//           <Menu.Item key="/" icon={<HomeOutlined />}>
//             <Link to="/">Home</Link>
//           </Menu.Item>
//           <Menu.Item key="/bills" icon={<CopyOutlined />}>
//             <Link to="/bills">Bills</Link>
//           </Menu.Item>
//           <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
//             <Link to="/items">Items</Link>
//           </Menu.Item>
//           <Menu.Item key="/customers" icon={<UserOutlined />}>
//             <Link to="/customers">Customers</Link>
//           </Menu.Item>
//           <Menu.Item key="/logout" icon={<LogoutOutlined />}>
//             Logout
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout className="site-layout">
//         <Header className="site-layout-background" style={{ padding: 0 }}>
//           {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//             className: 'trigger',
//             onClick: toggle,
//           })}
//         </Header>
//         <Content
//           className="site-layout-background"
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//           }}
//         >
//           {children}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default DefaultLayout;



import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const DefaultLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    { label: <Link to="/">Home</Link>, icon: <HomeOutlined />, key: 'home' },
    { label: <Link to="/bills">Bills</Link>, icon: <CopyOutlined />, key: 'bills' },
    { label: <Link to="/items">Items</Link>, icon: <UnorderedListOutlined />, key: 'items' },
    { label: <Link to="/customers">Customers</Link>, icon: <UserOutlined />, key: 'customers' },
    { label: 'Logout', icon: <LogoutOutlined />, key: 'logout' },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h1 className="text-center text-light font-weight-bold mt-4">POS</h1>
        </div>
        <Menu mode="inline" theme="dark" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
