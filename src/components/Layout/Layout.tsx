// Layout.tsx
import React, { ReactNode, useContext, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Button, Input, message, Modal } from "antd";
import apis from "../../api/api";
import { UserContext } from "../../context/UserContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { showAuthModal, setAuthModal, setUserLoggedIn } =
    useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const displayModal = () => {
    setAuthModal(true);
  };

  const handleOk = () => {
    setAuthModal(false);
    setUsername("");
    setPassword("");
  };

  const handleCancel = () => {
    setAuthModal(false);
    setUsername("");
    setPassword("");
  };

  const onLogin = async () => {
    try {
      const res = await apis.handleLogin(username, password);
      if (res?.data) {
        setUserLoggedIn(true);
      } else {
        message.error({
          content:
            "Invalid credentials. Please check your details and try again",
          style: {
            textAlign: "end",
          },
        });
      }
      setAuthModal(false);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = async () => {
    await apis.handleLogout();
    setUserLoggedIn(false);
  };
  return (
    <div>
      <Header loginHandler={displayModal} logoutHandler={onLogout} />
      <main>{children}</main>
      <Footer />
      <Modal
        open={showAuthModal}
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
