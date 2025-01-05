/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Layout, Menu } from "antd";
import { adminPaths } from "../../router/admin.route";
import { navLinkGenerator } from "../../utils/navLinkGenerator";
import { userPaths } from "../../router/user.route";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TUser } from "../../types/global.types";
import { useState } from "react";
import { logout, selectToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import "./layout.css";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = () => {
  const token = useAppSelector(selectToken);
  const [collapsed, setCollapsed] = useState(false);

  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(logout());
  };

  let user;

  if (token) {
    user = verifyToken(token) as TUser;
  }

  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = navLinkGenerator(adminPaths);
      break;
    case userRole.USER:
      sidebarItems = navLinkGenerator(userPaths);
      break;
    default:
      break;
  }

  return (
    <>
      <Button
        className="dashboard-hamburger"
        type="primary"
        onClick={() => setCollapsed(!collapsed)}
        style={{ position: "fixed", top: 10, right: 10, zIndex: 1 }}
      >
        {collapsed ? <MenuOutlined /> : <CloseOutlined />}
      </Button>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        onBreakpoint={(_broken) => {
          // console.log(broken);
        }}
        collapsed={collapsed}
        onCollapse={(collapsed, _type) => {
          setCollapsed(collapsed);
        }}
        style={{ height: "100vh", position: "sticky", top: 0, left: 0 }}
      >
        <Link to="/">
          <div
            className="demo-logo-vertical"
            style={{
              color: "#fff",
              fontSize: "20px",
              textAlign: "center",
              padding: "20px",
              fontWeight: "bold",
              borderBottom: "1px  solid",
              borderBottomStyle: "dashed",
            }}
          >
            QuickTrip
          </div>
        </Link>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={sidebarItems}
        />
        <Button
          className="sidebar-logout-button"
          style={{
            width: "100%",
            marginTop: "20px",
          }}
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </Sider>
    </>
  );
};

export default Sidebar;
