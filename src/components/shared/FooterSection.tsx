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
        backgroundColor: "#1a1a1a",
        color: "#e0e0e0",
        padding: "50px 0 20px",
        borderTop: "1px solid #333",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        <Row gutter={[0, 32]} justify={{ xs: 'start', sm: 'space-between' }} style={{ width: '100%' }}>
          {/* Social Media Links */}
          <Col xs={24} sm={12} md={5} style={{ display: 'flex', justifyContent: 'center' }}>
            <Space size="middle" align="center">
              {[
                { icon: <FacebookOutlined />, color: "#3b5998" },
                { icon: <TwitterOutlined />, color: "#1DA1F2" },
                { icon: <InstagramOutlined />, color: "#E4405F" },
                { icon: <LinkedinOutlined />, color: "#0077b5" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: social.color,
                    color: "#fff",
                    transition: "all 0.3s",
                    fontSize: "18px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.8";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </Space>
          </Col>

          {/* Company Links */}
          <Col xs={24} sm={12} md={5} style={{ marginBottom: '24px', padding: '0 16px' }}>
            <Space direction="vertical" size="small" style={{ width: '100%' }} align="start">
              <h4 style={{ color: "#ffffff", marginBottom: '10px' }}>Company</h4>
              <a href="/about-us" style={{ color: "#b0b0b0", display: 'block', marginBottom: '8px' }}>
                About Us
              </a>
              <a href="/careers" style={{ color: "#b0b0b0", display: 'block', marginBottom: '8px' }}>
                Careers
              </a>
              <a href="/blog" style={{ color: "#b0b0b0", display: 'block', marginBottom: '8px' }}>
                Blog
              </a>
              <a href="/press" style={{ color: "#b0b0b0", display: 'block' }}>
                Press
              </a>
            </Space>
          </Col>

          {/* Legal Links */}
          <Col xs={24} sm={12} md={5} style={{ marginBottom: '24px', padding: '0 16px' }}>
            <Space direction="vertical" size="small" style={{ width: '100%' }} align="start">
              <h4 style={{ color: "#ffffff", marginBottom: '10px' }}>Legal</h4>
              <a href="/privacy-policy" style={{ color: "#b0b0b0", display: 'block', marginBottom: '8px' }}>
                Privacy Policy
              </a>
              <a href="/terms-of-service" style={{ color: "#b0b0b0", display: 'block', marginBottom: '8px' }}>
                Terms of Service
              </a>
              <a href="/cookie-policy" style={{ color: "#b0b0b0", display: 'block', marginBottom: '8px' }}>
                Cookie Policy
              </a>
              <a href="/gdpr" style={{ color: "#b0b0b0", display: 'block' }}>
                GDPR
              </a>
            </Space>
          </Col>

          {/* Contact Information */}
          <Col xs={24} sm={24} md={5} style={{ marginBottom: '24px', padding: '0 16px' }}>
            <Space direction="vertical" size="small" align="center">
              <p style={{ margin: 0, color: "#e0e0e0" }}>Contact Us:</p>
              <p style={{ margin: 0, color: "#b0b0b0" }}>
                Email: support@quicktrip.com
              </p>
              <p style={{ margin: 0, color: "#b0b0b0" }}>
                Phone: +1-800-555-1234
              </p>
            </Space>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Col>
            <p style={{ margin: 0, color: "#888", fontSize: "14px" }}>
              &copy; {new Date().getFullYear()} QuickTrip. All rights reserved.
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default FooterSection;
