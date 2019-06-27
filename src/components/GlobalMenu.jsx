import React from 'react';
import styled from 'styled-components';
import { Layout, Menu, Typography, Avatar } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

export default function GlobalMenu() {
    return (
      <StyledHeader
        style={{
          //   position: "fixed",
          zIndex: 1,
          width: "100%",
          //   padding: "0",
          backgroundColor: "#fff"
        }}
      >
        <div>
          <Title style={{ margin: "0px" }}>Art Portfolio</Title>
        </div>
        <Menu mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="1">Login</Menu.Item>
          <Menu.Item key="2">Logout</Menu.Item>
          <Menu.Item key="3">Signup</Menu.Item>
          <Menu.Item key="4">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> User
          </Menu.Item>
        </Menu>
      </StyledHeader>
    );
}

const StyledHeader = styled(Header)`
    display: flex;
    justify-content: space-between;
    align-items:center;
`