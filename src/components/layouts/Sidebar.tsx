/* eslint-disable @typescript-eslint/no-unused-vars */
import { Layout, Menu } from "antd";
import { adminPaths } from "../../router/admin.route";
import { navLinkGenerator } from "../../utils/navLinkGenerator";
import { userPaths } from "../../router/user.route";
import { useAppSelector } from "../../redux/hooks";
import { selectToken } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { verifyToken } from "../../utils/verifyToken";
import { TUser } from "../../types/global.types";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = () => {
  const token = useAppSelector(selectToken);
  const dispatch = useDispatch();
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
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(_broken) => {
        // console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{ height: "100vh", position: "sticky", top: 0, left: 0 }}
    >
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

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
