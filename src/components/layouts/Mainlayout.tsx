import { Button, Drawer, Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { navLinkGenerator } from "../../utils/navLinkGenerator";
import { globalPaths } from "../../router/global.routes";
import FooterSection from "../shared/FooterSection";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./layout.css";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;

const items: any = navLinkGenerator(globalPaths);

const Mainlayout = () => {
  const [visible, setVisible] = useState(false);
  const user = useAppSelector(selectUser);
  console.log(user);



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
          padding: "0 48px",
          background: "#1a1a1a",
          height: "80px",
          lineHeight: "80px",
          position: "sticky",
          top: 0,
          zIndex: 1,
          borderBottom: "1px solid #333"
        }}
      >
        <Link to="/">
          <h1 className="responsive-logo" style={{ color: "white" }}>
            Quick <span style={{ color: "#059862" }}>Trip</span>{" "}
          </h1>
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <MenuOutlined
            style={{
              color: "#059862",
              background: "black",
              padding: "4px",
              borderRadius: "5px",
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
            style={{
              flexGrow: 1,
              justifyContent: "flex-end",
              minWidth: 0,
              borderBottom: "0px",
              background: "transparent"
            }}
          />
          {user?.role ? (
            <>
              <Link className="desktop-menu" to={`/${user?.role}/dashboard  `}>
                <Button>Dashboard</Button>
              </Link>
            </>
          ) : (
            <>
              <Link className="desktop-menu" to={"/login"}>
                <Button>Log in</Button>
              </Link>
              <Link className="desktop-menu" to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </Header>
      <div style={{ background: "#1a1a1a", minHeight: "100vh" }}>
        <Drawer placement="left" onClose={onClose} open={visible} width={250}>
          <Menu
            mode="inline"
            style={{ background: "#F5F5F5", boxShadow: "none", border: "none" }}
            defaultSelectedKeys={["1"]}
            items={items}
            onClick={onClose}
          />
          {user?.role ? (
            <div style={{ width: "100%", marginTop: "20px" }}>
              <Link className="hamburger-menu" to={`/${user?.role}/dashboard`}>
                <Button style={{ width: "100%", marginBottom: "15px" }}>
                  Dashboard
                </Button>
              </Link>
            </div>
          ) : (
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
          )}
        </Drawer>
        <Content style={{ padding: "0 48px", margin: "24px 0", background: "#1a1a1a" }}>
          <div style={{ minHeight: "calc(100vh - 184px)" }}>
            <Outlet />
          </div>
        </Content>
      </div>
      <FooterSection />
    </Layout>
  );
};

export default Mainlayout;
