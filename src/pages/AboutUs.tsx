import { Row, Col, Card, Button, Typography, Input } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ padding: "30px", backgroundColor: "#f9f9f9" }}>
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
          <Title level={2}>About Us</Title>
          <Paragraph>
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
              cover={<img alt={member.name} src={member.image} />}
              bordered={false}
            >
              <Title level={4}>{member.name}</Title>
              <Paragraph>{member.role}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Hiring Section */}
      <Row justify="center" style={{ margin: "50px 0" }}>
        <Col
          xs={22}
          sm={20}
          md={16}
          lg={12}
          xl={10}
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        >
          <Title level={3}>We’re Hiring!</Title>
          <Paragraph>
            Interested in working with us? Join our team today.
          </Paragraph>
          <Button type="primary" size="large">
            Apply Now
          </Button>
        </Col>
      </Row>

      {/* Newsletter Section */}
      <Row justify="center">
        <Col
          xs={22}
          sm={20}
          md={16}
          lg={12}
          xl={10}
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        >
          <Title level={3}>Subscribe to Our Newsletter</Title>
          <Paragraph>
            Stay updated with the latest news and offers from us.
          </Paragraph>
          <Input.Search
            placeholder="Enter your email address"
            enterButton="Sign Up"
            size="large"
            style={{ maxWidth: "400px", width: "100%" }}
          />
        </Col>
      </Row>

      {/* Contact Section */}
      <Row justify="center" style={{ marginTop: "50px" }}>
        <Col
          xs={22}
          sm={20}
          md={16}
          lg={14}
          xl={12}
          style={{ textAlign: "center" }}
        >
          <Title level={4}>Contact Us</Title>
          <Paragraph>
            <MailOutlined style={{ marginRight: "8px" }} /> info@carrental.com
          </Paragraph>
          <Paragraph>
            <PhoneOutlined style={{ marginRight: "8px" }} /> +123 456 7890
          </Paragraph>
          <Paragraph>
            <EnvironmentOutlined style={{ marginRight: "8px" }} /> 123 Main
            Street, Anytown, USA
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
