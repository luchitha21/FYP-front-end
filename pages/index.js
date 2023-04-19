import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  DatabaseOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Spin } from "antd";
import React, { useState } from "react";
import Image from "next/image";
import Searchbox from "./components/Searchbox";
// import VcImg from "venture.png";
const { Header, Sider, Content } = Layout;

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [loader, setLoading] = useState(false);
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <Image
            src="/Transparent.png"
            alt="Picture of the author"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <WindowsOutlined />,
              label: "Dashboard",
            },
            // {
            //   key: "2",
            //   icon: <DatabaseOutlined />,
            //   label: "Companies",
            // },
            // {
            //   key: "3",
            //   icon: <UploadOutlined />,
            //   label: "Blog",
            // },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        {loader ? (
          <Spin />
        ) : (
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
            }}
          >
            <Searchbox />
          </Content>
        )}
      </Layout>
    </Layout>
  );
}
