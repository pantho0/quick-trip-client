import { Carousel, Row, Col, Card, Typography, Image } from "antd";

const { Title, Text } = Typography;

const featuredCars = [
  {
    name: "Tesla Model 3",
    description: "A sleek, all-electric sedan with autopilot features.",
    price: "$25/hour",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg",
  },
  {
    name: "Ford Mustang",
    description: "A classic muscle car with top-notch performance.",
    price: "$30/hour",
    image:
      "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/dm/24_FRD_MST_S5A0331_1e_V2.tif?croppathe=1_4x3&wid=900",
  },
  {
    name: "BMW X5",
    description: "A luxurious SUV with spacious interiors.",
    price: "$40/hour",
    image:
      "https://preview.redd.it/2024-bmw-x5-carplay-issues-v0-bhp0o54e188d1.jpeg?auto=webp&s=babe32322c34dabd3e23cfc3597c821c24b7d644",
  },
];

const FeaturedCars = () => {
  return (
    <div style={{ margin: "60px 0", padding: "20px 0", background: "#f5f5f5" }}>
      <h1 style={{ textAlign: "center", color: "#eb2f06" }}>
        --Featured Cars--
      </h1>
      <Carousel autoplay>
        {featuredCars.map((car, index) => (
          <div key={index}>
            <Row
              gutter={[16, 16]}
              align="middle"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              {/* Left: Car Image */}
              <Col xs={24} md={12} style={{ textAlign: "center" }}>
                <Image
                  src={car.image}
                  alt={car.name}
                  width={500}
                  height={300}
                  style={{
                    borderRadius: "10px",
                    objectFit: "contain",
                    backgroundPosition: "center",
                  }}
                />
              </Col>

              {/* Right: Car Details */}
              <Col xs={24} md={12}>
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
  );
};

export default FeaturedCars;
