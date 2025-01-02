import {
  Button,
  Carousel,
  Col,
  Flex,
  Form,
  Image,
  Input,
  Row,
  Space,
} from "antd";
import "../../styles/banner.css";

const Banner = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <Row>
      <Col span={24} md={{ span: 12 }}>
        <Flex
          align="flex-start"
          justify="center"
          vertical
          style={{ height: "100vh" }}
        >
          <h1 className="responsive-title">
            QuickTrip:Your Journey, Simplified
          </h1>
          <h4 className="responsive-subtitle">
            Effortless Car Reservations for Every Destination
          </h4>
          <p className="responsive-paragraph">
            Quick Trip makes finding the perfect car for your journey a breeze.
            Simply select your pickup and drop-off locations, and let us connect
            you with the best options available. Wherever you're headed, Quick
            Trip ensures a smooth ride every time.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <Form layout="vertical" className="responsive-form">
              <Form.Item name={"From"} label={"From"} style={{ flex: 1 }}>
                <Input />
              </Form.Item>
              <Form.Item name={"To"} label={"To"} style={{ flex: 1 }}>
                <Input />
              </Form.Item>
              <Button>Search Car</Button>
            </Form>
          </div>
        </Flex>
      </Col>
      <Col span={24} md={{ span: 12 }}>
        <Carousel afterChange={onChange} autoplay>
          <div>
            <Image
              className="reponsive-bannerImage"
              src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <Image
              className="reponsive-bannerImage"
              src="https://images.unsplash.com/photo-1524095838546-2d9b8d00f212?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <Image
              className="reponsive-bannerImage"
              src="https://images.unsplash.com/photo-1544468607-e7b3e848ff87?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};

export default Banner;
