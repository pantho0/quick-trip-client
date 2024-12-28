import { Layout, Menu } from "antd";
import { adminPaths } from "../../router/admin.route";
import { navLinkGenerator } from "../../utils/navLinkGenerator";
import { userPaths } from "../../router/user.route";
import { useAppSelector } from "../../redux/hooks";
import { selectUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = () => {
  const user = useAppSelector(selectUser);

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
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
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
