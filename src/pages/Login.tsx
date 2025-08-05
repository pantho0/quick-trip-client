import {
  Button,
  Row,
  Col,
  Card,
  Typography,
  Divider,
  Checkbox,
  Space,
} from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import BaseForm from "../components/Form/BaseForm";
import BaseInput from "../components/Form/BaseInput";
import {
  LockOutlined,
  MailOutlined,
  GoogleOutlined,
  FacebookOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import "../styles/login.css";

const { Title, Text } = Typography;

const Login = () => {
  const defaultValues = {
    email: "admin@example.com",
    password: "password123",
  };

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(data).unwrap();
      const decodedUser = verifyToken(res?.data?.token) as TUser;
      dispatch(setUser({ user: decodedUser, token: res.data.token }));
      toast.success("User Logged In", { id: toastId, duration: 2000 });
      navigate(`/${decodedUser?.role}/dashboard`);
    } catch (error: any) {
      toast.error(error?.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" className="login-container">
      <Col xs={22} sm={18} md={14} lg={10} xl={8}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card bordered={false} className="login-card">
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div className="login-logo">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="logo-circle">
                    <span className="logo-text">QT</span>
                  </div>
                </motion.div>
              </div>
              <Title level={2} className="login-title">
                <span style={{ color: "#b0b0b0" }}>Welcome to</span> <br />{" "}
                <span style={{ color: "#059862" }}>Quick Trip</span>
              </Title>
              <Text className="login-subtitle">
                Sign in to continue to your account
              </Text>
            </div>

            <BaseForm onSubmit={onSubmit} defaultValues={defaultValues}>
              <div className="login-form-item">
                <BaseInput
                  type="text"
                  name="email"
                  label={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <MailOutlined style={{ color: "#059862" }} />
                      <span>Email</span>
                    </div>
                  }
                />
              </div>

              <div className="login-form-item">
                <BaseInput
                  type="password"
                  name="password"
                  label={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <LockOutlined style={{ color: "#059862" }} />
                      <span>Password</span>
                    </div>
                  }
                />
              </div>

              <Space
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <Checkbox style={{ color: "#b0b0b0" }}>Remember me</Checkbox>
                <Link to="#" className="login-link">
                  Forgot password?
                </Link>
              </Space>

              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className="login-button"
              >
                Sign In
              </Button>
            </BaseForm>

            <Divider className="login-divider">
              <Text style={{ color: "#b0b0b0" }}>OR</Text>
            </Divider>

            <div className="social-login">
              <Button
                className="social-button google-button"
                icon={<GoogleOutlined />}
              >
                Continue with Google
              </Button>
              <Space
                style={{
                  width: "100%",
                  justifyContent: "center",
                  margin: "12px 0",
                }}
              >
                <Button
                  className="social-button facebook-button"
                  icon={<FacebookOutlined />}
                >
                  Facebook
                </Button>
                <Button
                  className="social-button apple-button"
                  icon={<AppleOutlined />}
                >
                  Apple
                </Button>
              </Space>
            </div>

            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <Text style={{ color: "#b0b0b0" }}>
                Don't have an account?{" "}
                <Link to="/signup" className="login-link">
                  Sign Up
                </Link>
              </Text>
            </div>
          </Card>
        </motion.div>
      </Col>
    </Row>
  );
};

export default Login;
