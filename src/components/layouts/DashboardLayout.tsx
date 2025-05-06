import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import "./layout.css";

const { Header, Content } = Layout;

const DashboardLayout = () => {
  const dispatch = useAppDispatch();

  const signOut = () => {
    dispatch(logout());
  };


  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header style={{ 
          padding: 0, 
          background: '#1a1a1a',
          borderBottom: '1px solid #444',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: '24px',
          height: '64px',
          lineHeight: '64px'
        }}>
          <Button
            type="primary"
            className="dashboard-logout-button"
            onClick={signOut}
          >
            Logout
          </Button>
        </Header>
        <Content style={{ 
          margin: '24px 16px 0',
          background: '#1a1a1a'
        }}>
          <div
            style={{
              padding: 24,
              minHeight: 'calc(100vh - 112px)',
              background: '#1a1a1a',
              borderRadius: 8,
              color: '#b0b0b0'
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
