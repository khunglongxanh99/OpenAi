import React, { memo, useState } from 'react';
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Link from 'next/link'

const { SubMenu } = Menu;

const Header = memo(({ } ) => {
    const [collapsed,setCollapsed] = useState();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };
    return (
    <>
        <div style={{ width: 256 }}>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
           <Link href="/theory">
            <a >
              Lý Thuyết
            </a>
           </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
           
            <Link href="/">
            <a >
              Gợi ý code
            </a>
           </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
           Học tập
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            Giới Thiệu
          </Menu.Item>
          <Menu.Item key="5" icon={<ContainerOutlined />}>
           Bài Viết
          </Menu.Item>
        </Menu>
      </div>
    </>)
})
export default Header
