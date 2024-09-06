// Layout.tsx
import React, { ReactNode, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Button, Input, Modal } from "antd";
import apis from "../../api/api";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setUsername("");
    setPassword("");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setUsername("");
    setPassword("");
  };

  const onLogin = async () => {
    await apis.handleLogin(username, password);
    setIsModalOpen(false);
    setIsLoggedIn(true);
    setUsername("");
    setPassword("");
  };

  const onLogout = async () => {
    await apis.handleLogout();
    setIsLoggedIn(false);
  };
  return (
    <div>
      <Header
        loginHandler={showModal}
        isLoggedIn={isLoggedIn}
        logoutHandler={onLogout}
      />
      <main>{children}</main>
      <Footer />
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ padding: "30px 8px 8px" }}>
          <h1 style={{ fontWeight: 500, margin: 0, fontSize: 38 }}>Login</h1>
          <div style={{ fontSize: 30, color: "#AE9F9F", lineHeight: 1 }}>
            to your dashboard
          </div>

          <div style={{ margin: "35px 0" }}>
            <label>Username</label>
            <Input
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
            />
            <div style={{ marginTop: 8 }}>
              <label>Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={onLogin}
            disabled={!password || !username}
          >
            Login
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Layout;
