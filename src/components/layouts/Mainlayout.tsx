import { Button, Drawer, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { navLinkGenerator } from "../../utils/navLinkGenerator";
import { globalPaths } from "../../router/global.routes";
import FooterSection from "../shared/FooterSection";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./layout.css";

const { Header, Content } = Layout;

const items = navLinkGenerator(globalPaths);

const Mainlayout = () => {
  const [visible, setVisible] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo" style={{ color: "white " }}>
          Logo
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <MenuOutlined
            style={{
              color: "wheat",
              fontSize: "24px",
              display: "none",
            }}
            onClick={showDrawer}
            className="hamburger-menu"
          />

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            className="desktop-menu"
          />
          <Link className="desktop-menu" to={"/login"}>
            <Button>Log in</Button>
          </Link>
          <Link className="desktop-menu" to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </Header>
      <Drawer
        style={{ backgroundColor: "#001529" }}
        title="Menu"
        placement="left"
        onClose={onClose}
        open={visible}
        width={250}
      >
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={onClose}
        />
        <div style={{ width: "100%", marginTop: "20px" }}>
          <Link className="hamburger-menu" to={"/login"}>
            <Button style={{ width: "100%", marginBottom: "15px" }}>
              Log in
            </Button>
          </Link>
          <Link className="hamburger-menu" to="/signup">
            <Button style={{ width: "100%" }}>Sign Up</Button>
          </Link>
        </div>
      </Drawer>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: "100vh",
            padding: 10,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <FooterSection />
    </Layout>
  );
};

export default Mainlayout;
