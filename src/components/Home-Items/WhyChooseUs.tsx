import { Row, Col, Card } from "antd";
import {
  CarOutlined,
  ClockCircleOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CarOutlined style={{ fontSize: "40px", color: "#059862" }} />,
      title: "Wide Selection of Cars",
      description:
        "Choose from a variety of vehicles to suit your travel needs.",
    },
    {
      icon: (
        <ClockCircleOutlined style={{ fontSize: "40px", color: "#059862" }} />
      ),
      title: "24/7 Availability",
      description: "Book anytime, anywhere with our round-the-clock service.",
    },
    {
      icon: <SafetyOutlined style={{ fontSize: "40px", color: "#059862" }} />,
      title: "Safe & Reliable",
      description:
        "Your safety is our priority with trusted vehicles and drivers.",
    },
  ];

  return (
    <div style={{ padding: "50px 20px", backgroundColor: "#1a1a1a" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "30px",
          color: "#e0e0e0",
        }}
      >
        Why Choose QuickTrip?
      </h2>
      <Row gutter={[24, 24]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              style={{
                textAlign: "center",
                borderRadius: "12px",
                backgroundColor: "#2a2a2a",
                border: "1px solid #444",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                height: "100%",
              }}
              bordered={false}
            >
              <div>{feature.icon}</div>
              <h3
                style={{ fontSize: "22px", marginTop: "20px", color: "#e0e0e0" }}
              >
                {feature.title}
              </h3>
              <p style={{ fontSize: "16px", color: "#b0b0b0" }}>
                {feature.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WhyChooseUs;
