import { Carousel, Col, Image, Row, Space } from "antd";

const Banner = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <Row>
      <Col span={24} md={{ span: 12 }}>
        <Row
          style={{
            display: "flex",
            alignContent: "center",
            height: "100vh",
          }}
        >
          <Space direction="vertical" size={"middle"}>
            <h1 style={{ color: "#eb2f06", fontSize: "45px" }}>
              QuickTrip:Your Journey, Simplified
            </h1>
            <h4 style={{ color: "#e55039", fontSize: "20px" }}>
              Effortless Car Reservations for Every Destination
            </h4>
            <p style={{ fontSize: "16px", width: "80%" }}>
              Quick Trip makes finding the perfect car for your journey a
              breeze. Simply select your pickup and drop-off locations, and let
              us connect you with the best options available. Wherever you're
              headed, Quick Trip ensures a smooth ride every time.
            </p>
          </Space>
        </Row>
      </Col>
      <Col span={24} md={{ span: 12 }}>
        <Carousel afterChange={onChange} autoplay>
          <div>
            <Image
              style={{ borderRadius: "50px" }}
              width={600}
              height={"100vh"}
              src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <Image
              width={600}
              height={"100vh"}
              style={{ borderRadius: "50px" }}
              src="https://images.unsplash.com/photo-1524095838546-2d9b8d00f212?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <Image
              width={600}
              height={"100vh"}
              style={{ borderRadius: "50px" }}
              src="https://images.unsplash.com/photo-1544468607-e7b3e848ff87?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};

export default Banner;
