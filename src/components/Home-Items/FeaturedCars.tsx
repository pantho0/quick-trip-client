import { Carousel, Row, Col, Card, Typography, Image } from "antd";
import { motion } from "framer-motion";
import "../../styles/featured.css";

import bmw from "../../assets/images/bmw.jpg";
import tesla from "../../assets/images/tesla.jpg";
import ford from "../../assets/images/ford.jpg";

const { Title, Text } = Typography;

const featuredCars = [
  {
    name: "Tesla Model 3",
    description:
      "Experience the future of driving with the Tesla Model 3 — an all-electric sedan designed for performance and safety. Equipped with cutting-edge autopilot features, instant torque, and a minimalist interior, the Model 3 offers a quiet, smooth, and eco-friendly ride. Perfect for both city commutes and long-distance travel.",
    price: "$25/hour",
    image: tesla,
  },
  {
    name: "Ford Mustang",
    description:
      "Turn heads with the iconic Ford Mustang — a symbol of power, performance, and American muscle. With a roaring engine, bold styling, and precision handling, this car delivers an adrenaline-pumping ride. Ideal for thrill-seekers and those who crave the open road.",
    price: "$30/hour",
    image: ford,
  },
  {
    name: "BMW X5",
    description:
      "Indulge in luxury and comfort with the BMW X5 — a premium SUV that blends performance, technology, and spacious design. Featuring a refined interior, powerful engine options, and advanced safety systems, the X5 is built for both family trips and executive travel.",
    price: "$40/hour",
    image: bmw,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const FeaturedCars = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="featured"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", color: "#e0e0e0", padding: "20px 0" }}
      >
        Featured Cars
      </motion.h1>
      <div style={{ padding: "20px 0" }}>
        <motion.div variants={item}>
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
                      background: "#2a2a2a",
                      borderRadius: "10px",
                      border: "1px solid #444",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    }}
                    className="featured-card"
                  >
                    <Title level={3} style={{ color: "#059862" }}>
                      {car.name}
                    </Title>
                    <Text
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        color: "#b0b0b0",
                        backgroundColor: "transparent",
                        padding: "8px 0",
                      }}
                    >
                      {car.description}
                    </Text>
                    <Text
                      strong
                      style={{
                        fontSize: "18px",
                        color: "#059862",
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturedCars;
