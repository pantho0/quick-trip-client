import { Row, Col, Form, Input, Button, Typography } from "antd";
import Lottie from "lottie-react";
import contactForm from "../assets/animations/contactForm.json";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const onFinish = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#f9f9f9" }}>
      <Row
        justify="center"
        align="middle"
        gutter={[32, 32]}
        style={{ minHeight: "100vh" }}
      >
        {/* Form Section */}
        <Col xs={24} md={12}>
          <Title level={2} style={{ textAlign: "left" }}>
            Get in Touch
          </Title>
          <Paragraph>
            Fill out the form below, and we’ll get back to you as soon as
            possible.
          </Paragraph>
          <Form
            layout="vertical"
            onFinish={onFinish}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Form.Item
              label="Full Name"
              name="fullname"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter a valid email",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Enter your email address" />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter your phone number",
                },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} placeholder="Write your message here" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
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
