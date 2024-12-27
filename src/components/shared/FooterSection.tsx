import { Col, Row, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const FooterSection = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <Row justify="center" gutter={[16, 16]}>
        {/* Social Media Links */}
        <Col xs={24} sm={12} md={6}>
          <Space size="large">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined
                style={{ fontSize: "24px", color: "#3b5998" }}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterOutlined style={{ fontSize: "24px", color: "#1DA1F2" }} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined
                style={{ fontSize: "24px", color: "#E4405F" }}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined
                style={{ fontSize: "24px", color: "#0077b5" }}
              />
            </a>
          </Space>
        </Col>

        {/* Privacy Policy and Terms */}
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical" size="small">
            <a href="/privacy-policy" style={{ color: "#555" }}>
              Privacy Policy
            </a>
            <a href="/terms-of-service" style={{ color: "#555" }}>
              Terms of Service
            </a>
          </Space>
        </Col>

        {/* Contact Information */}
        <Col xs={24} sm={24} md={6}>
          <Space direction="vertical" size="small">
            <p style={{ margin: 0, color: "#555" }}>Contact Us:</p>
            <p style={{ margin: 0, color: "#555" }}>
              Email: support@quicktrip.com
            </p>
            <p style={{ margin: 0, color: "#555" }}>Phone: +1-800-555-1234</p>
          </Space>
        </Col>
      </Row>

      {/* Footer Bottom */}
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col>
          <p style={{ margin: 0, color: "#888" }}>
            &copy; {new Date().getFullYear()} QuickTrip. All rights reserved.
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterSection;
