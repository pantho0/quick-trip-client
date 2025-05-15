import { Button, Row, Col, Card, Typography, Divider, Space } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import BaseForm from "../components/Form/BaseForm";
import BaseInput from "../components/Form/BaseInput";
import { useSignupMutation } from "../redux/features/auth/authApi";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  GoogleOutlined,
  FacebookOutlined,
  AppleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import "../styles/login.css"; // Reusing the login styles

const { Title, Text } = Typography;

const Signup = () => {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [signup] = useSignupMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Check if passwords match
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const toastId = toast.loading("Creating account...");
    try {
      // Remove confirmPassword before sending to API
      const { confirmPassword, ...signupData } = data;

      // Call the signup API
      const res = await signup(signupData).unwrap();

      console.log(res);

      toast.success("Account created successfully", {
        id: toastId,
        duration: 2000,
      });
      navigate("/login");
    } catch (error: any) {
      toast.error(error?.message || "Failed to create account", {
        id: toastId,
        duration: 2000,
      });
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
                <span style={{ color: "#b0b0b0" }}>Create Account</span> <br />{" "}
                <span style={{ color: "#059862" }}>Quick Trip</span>
              </Title>
              <Text className="login-subtitle">
                Sign up to start your journey with us
              </Text>
            </div>

            <BaseForm onSubmit={onSubmit} defaultValues={defaultValues}>
              <div className="login-form-item">
                <BaseInput
                  type="text"
                  name="name"
                  label={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <UserOutlined style={{ color: "#059862" }} />
                      <span>Full Name</span>
                    </div>
                  }
                />
              </div>

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
                  type="text"
                  name="phone"
                  label={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <PhoneOutlined style={{ color: "#059862" }} />
                      <span>Phone Number</span>
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

              <div className="login-form-item">
                <BaseInput
                  type="password"
                  name="confirmPassword"
                  label={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <LockOutlined style={{ color: "#059862" }} />
                      <span>Confirm Password</span>
                    </div>
                  }
                />
              </div>

              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className="login-button"
              >
                Create Account
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
                Already have an account?{" "}
                <Link to="/login" className="login-link">
                  Sign In
                </Link>
              </Text>
            </div>
          </Card>
        </motion.div>
      </Col>
    </Row>
  );
};

export default Signup;
