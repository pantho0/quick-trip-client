import { Row, Col, Form, Input, Button, Typography } from "antd";
import Lottie from "lottie-react";
import contactForm from "../assets/animations/contactForm.json";
import "./Contact.css";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const onFinish = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#1a1a1a", minHeight: "100vh" }}>
      <Row
        justify="center"
        align="middle"
        gutter={[32, 32]}
        style={{ padding: "40px 0" }}
      >
        {/* Form Section */}
        <Col xs={24} md={12}>
          <Title level={2} style={{ textAlign: "left", color: "#fff" }}>
            Get in Touch
          </Title>
          <Paragraph style={{ color: "#b0b0b0", marginBottom: "30px" }}>
            Fill out the form below, and we’ll get back to you as soon as
            possible.
          </Paragraph>
          <Form
            layout="vertical"
            onFinish={onFinish}
            style={{
              backgroundColor: "#2a2a2a",
              padding: "30px",
              borderRadius: "10px",
              border: "1px solid #444",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Form.Item
              label={<span style={{ color: "#fff" }}>Full Name</span>}
              name="fullname"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input
                placeholder="Enter your full name"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #444",
                  color: "#fff"
                }}
                className="custom-input"
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "#fff" }}>Email</span>}
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid email",
                  type: "email",
                },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #444",
                  color: "#fff"
                }}
                className="custom-input"
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "#fff" }}>Phone</span>}
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number",
                },
              ]}
            >
              <Input
                placeholder="Enter your phone number"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #444",
                  color: "#fff"
                }}
                className="custom-input"
              />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "#fff" }}>Message</span>}
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Write your message here"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #444",
                  color: "#fff"
                }}
                className="custom-textarea"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  backgroundColor: "#059862",
                  borderColor: "#059862",
                  height: "40px",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>

        {/* Animated Lottie Image */}
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <Lottie
            animationData={contactForm}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
