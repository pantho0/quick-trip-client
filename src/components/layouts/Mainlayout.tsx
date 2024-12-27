import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { navLinkGenerator } from "../../utils/navLinkGenerator";
import { globalPaths } from "../../router/global.routes";
import FooterSection from "../shared/FooterSection";

const { Header, Content } = Layout;

const items = navLinkGenerator(globalPaths);
const Mainlayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
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
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            style={{ minWidth: 0 }}
          />
          <Link to={"/login"}>
            <Button>Log in</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: "100vh",
            padding: 24,
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
