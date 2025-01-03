import { Carousel, Row, Col, Card, Typography, Image } from "antd";
import "../../styles/featured.css";

import bmw from "../../assets/images/bmw.jpg";
import tesla from "../../assets/images/tesla.jpg";
import ford from "../../assets/images/ford.jpg";

const { Title, Text } = Typography;

const featuredCars = [
  {
    name: "Tesla Model 3",
    description: "A sleek, all-electric sedan with autopilot features.",
    price: "$25/hour",
    image: tesla,
  },
  {
    name: "Ford Mustang",
    description: "A classic muscle car with top-notch performance.",
    price: "$30/hour",
    image: ford,
  },
  {
    name: "BMW X5",
    description: "A luxurious SUV with spacious interiors.",
    price: "$40/hour",
    image: bmw,
  },
];

const FeaturedCars = () => {
  return (
    <div className="featured">
      <h1 style={{ textAlign: "center", color: "#2a2c31", padding: "20px 0" }}>
        --Featured Cars--
      </h1>
      <div style={{ padding: "20px 0" }}>
        <Carousel autoplay>
          {featuredCars.map((car, index) => (
            <div key={index}>
              <Row
                gutter={[16, 16]}
                align="middle"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Left: Car Image */}
                <Col xs={24} md={24} lg={12} style={{ textAlign: "center" }}>
                  <Image
                    src={car.image}
                    alt={car.name}
                    style={{
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                </Col>

                {/* Right: Car Details */}
                <Col xs={24} md={24} lg={12}>
                  <Card
                    style={{
                      background: "#ffffff",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Title level={3} style={{ color: "#eb2f06" }}>
                      {car.name}
                    </Title>
                    <Text style={{ display: "block", marginBottom: "10px" }}>
                      {car.description}
                    </Text>
                    <Text
                      strong
                      style={{
                        fontSize: "18px",
                        color: "#27ae60",
                        display: "block",
                      }}
                    >
                      {car.price}
                    </Text>
                  </Card>
                </Col>
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedCars;
