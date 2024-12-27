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
    <div style={{ padding: "50px 20px", backgroundColor: "#f9f9f9" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "30px",
          color: "#333",
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
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    src={testimonial.avatar || <UserOutlined />}
                    size={64}
                    style={{ marginBottom: "20px" }}
                  />
                  <h3
                    style={{
                      fontSize: "22px",
                      marginBottom: "10px",
                      color: "#333",
                    }}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      fontStyle: "italic",
                      color: "#888",
                    }}
                  >
                    {testimonial.location}
                  </p>
                  <p style={{ fontSize: "16px", color: "#555" }}>
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
