import { Button, Carousel, Col, Flex, Form, Image, Input, Row } from "antd";
import tesla from "../../assets/images/tesla.jpg";
import bmw from "../../assets/images/bmw.jpg";
import audi from "../../assets/images/audi.jpg";
import ford from "../../assets/images/ford.jpg";
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
        <Flex vertical justify="center" style={{ height: "100vh" }}>
          <Carousel afterChange={onChange} autoplay>
            <div>
              <Image className="reponsive-bannerImage" src={tesla} />
            </div>
            <div>
              <Image className="reponsive-bannerImage" src={bmw} />
            </div>
            <div>
              <Image className="reponsive-bannerImage" src={audi} />
            </div>
            <div>
              <Image className="reponsive-bannerImage" src={ford} />
            </div>
          </Carousel>
        </Flex>
      </Col>
    </Row>
  );
};

export default Banner;
