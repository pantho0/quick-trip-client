import { Row, Col, Card, Button, Typography, Input } from "antd";
import { } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
      }}
    >
      {/* About Section */}
      <Row justify="center" style={{ marginBottom: "30px" }}>
        <Col
          xs={22}
          sm={20}
          md={16}
          lg={14}
          xl={12}
          style={{ textAlign: "center" }}
        >
          <Title level={2} style={{ color: "#fff", marginBottom: 24 }}>
            About Us
          </Title>
          <Paragraph style={{ color: "#b0b0b0" }}>
            Welcome to our Car Rental Reservation System! We aim to make your
            journey smooth and stress-free by providing top-quality vehicles and
            seamless online booking. Whether you’re traveling for business or
            leisure, we have the perfect car for you.
          </Paragraph>
        </Col>
      </Row>

      {/* Our Team Section */}
      <Row justify="center" gutter={[16, 16]}>
        {[
          {
            name: "John Doe",
            role: "Customer Support",
            image: "https://randomuser.me/api/portraits/men/10.jpg",
          },
          {
            name: "Jane Smith",
            role: "Fleet Manager",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
          },
          {
            name: "Samuel Green",
            role: "Technical Lead",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
          },
          {
            name: "Emily White",
            role: "Marketing Specialist",
            image: "https://randomuser.me/api/portraits/women/9.jpg",
          },
        ].map((member, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              cover={
                <div style={{ padding: "20px" }}>
                  <img
                    style={{
                      borderRadius: "100%",
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      margin: "0 auto",
                      display: "block"
                    }}
                    alt={member.name}
                    src={member.image}
                  />
                </div>
              }
              style={{
                background: "#2a2a2a",
                borderRadius: "10px",
                border: "1px solid #444",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                height: "100%"
              }}
              bodyStyle={{ textAlign: "center" }}
            >
              <Title level={4} style={{ color: "#059862", marginBottom: 8 }}>
                {member.name}
              </Title>
              <Paragraph style={{ color: "#b0b0b0", marginBottom: 0 }}>{member.role}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Hiring and Newsletter Sections */}
      <Row gutter={[24, 24]} style={{ margin: "50px 0" }}>
        {/* Hiring Section */}
        <Col xs={24} md={12}>
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              backgroundColor: "#2a2a2a",
              borderRadius: "10px",
              height: "100%",
              border: "1px solid #444",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Title level={3} style={{ color: "#059862", marginBottom: 16 }}>
              We're Hiring!
            </Title>
            <Paragraph style={{ color: "#b0b0b0", marginBottom: 24 }}>
              Interested in working with us? Join our team today.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              style={{ 
                backgroundColor: "#059862", 
                borderColor: "#059862",
                width: "100%",
                maxWidth: "200px"
              }}
            >
              Apply Now
            </Button>
          </div>
        </Col>

        {/* Newsletter Section */}
        <Col xs={24} md={12}>
          <div
            style={{
              textAlign: "center",
              padding: "30px",
              backgroundColor: "#2a2a2a",
              borderRadius: "10px",
              height: "100%",
              border: "1px solid #444",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Title level={3} style={{ color: "#fff", marginBottom: 16 }}>
              Subscribe to Our Newsletter
            </Title>
            <Paragraph style={{ color: "#b0b0b0", marginBottom: 24 }}>
              Stay updated with the latest news and offers from us.
            </Paragraph>
            <Input.Search
              placeholder="Enter your email address"
              enterButton="Sign Up"
              size="large"
              style={{ 
                maxWidth: "400px", 
                width: "100%",
                margin: "0 auto"
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
