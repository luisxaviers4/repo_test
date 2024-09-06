// Header.tsx
import React, { useContext, useEffect, useState } from "react";
import { Layout, Menu, Avatar, Dropdown, Space, Button, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/Logo.svg";
import logo from "../../assets/zprime_logo.png";
import classes from "./header.module.css";

const { Header: AntHeader } = Layout;

const userMenu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/profile"></Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

const Header: React.FC = ({ loginHandler, isLoggedIn, logoutHandler }) => {
  const navigate = useNavigate();

  return (
    <>
      <AntHeader className={classes.header} data-testid="header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            className={classes.logo}
            style={{ lineHeight: "0", marginRight: 16 }}
          >
            <div className={classes.logoCtr}>
              <img src={logo} alt="logo" style={{}} />
            </div>
          </Link>
        </div>
        {/* <Menu
          theme="light"
          mode="horizontal"
          style={{ flexGrow: 1, justifyContent: "flex-end", border: 0 }}
        >
          <Menu.Item key="1">
            <a href="#sustainability">Environmental Sustainability</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="#manufacturing">Manufacturing</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="#list">List of Functionalities</a>
          </Menu.Item>
          <Menu.Item key="4">
            <a href="#contact">Contact Us</a>
          </Menu.Item>
        </Menu> */}
        <div
          style={{ display: "flex", alignItems: "center", margin: "0 16px" }}
        >
          <Button
            style={{ width: 120 }}
            type="primary"
            ghost
            onClick={isLoggedIn ? logoutHandler : loginHandler}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </div>
      </AntHeader>
    </>
  );
};

export default Header;
