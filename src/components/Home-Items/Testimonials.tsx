import { Row, Col, Card, Carousel, Avatar } from "antd";
import { motion } from "framer-motion";
import { UserOutlined } from "@ant-design/icons";

const testimonials = [
  {
    name: "John Doe",
    location: "Toronto, Canada",
    feedback:
      "QuickTrip made my travel experience seamless. The car options were excellent, and the booking process was super easy. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emma Wilson",
    location: "New York, USA",
    feedback:
      "Amazing service! The car was clean and comfortable, and the customer support team was very responsive. I’ll definitely use QuickTrip again.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajesh Kumar",
    location: "Mumbai, India",
    feedback:
      "Booking a car has never been this easy! QuickTrip offers great prices and fantastic service. It’s my go-to platform for car reservations.",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
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

const Testimonials = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      style={{ padding: "50px 20px", backgroundColor: "#1a1a1a" }}
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "30px",
          color: "#e0e0e0",
        }}
      >
        What Our Customers Say
      </motion.h2>
      <motion.div variants={item}>
        <Carousel autoplay>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col xs={24} sm={18} md={12} lg={10}>
                <Card
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "#2a2a2a",
                    border: "1px solid #444",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    padding: "20px",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <Avatar
                    src={testimonial.avatar || <UserOutlined />}
                    size={64}
                    style={{
                      marginBottom: "20px",
                      border: "2px solid #059862",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "22px",
                      marginBottom: "10px",
                      color: "#059862",
                    }}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      fontStyle: "italic",
                      color: "#b0b0b0",
                    }}
                  >
                    {testimonial.location}
                  </p>
                  <p style={{ fontSize: "16px", color: "#b0b0b0" }}>
                    {testimonial.feedback}
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
        ))}
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
