import { Row, Col, Card, Carousel, Avatar } from "antd";
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

const Testimonials = () => {
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
        What Our Customers Say
      </h2>
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
    </div>
  );
};

export default Testimonials;
