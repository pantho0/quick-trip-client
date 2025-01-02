import { Button, Carousel, Col, Form, Image, Input, Row } from "antd";
import tesla from "../../assets/images/tesla.jpg";
import bmw from "../../assets/images/bmw.jpg";
import audi from "../../assets/images/audi.jpg";
import ford from "../../assets/images/ford.jpg";
import "../../styles/banner.css";

const Banner = () => {
  return (
    <Row>
      <Col
        span={24}
        md={{ span: 24 }}
        lg={{ span: 12 }}
        className="custom-bannerheading"
      >
        <div className="custom-bannerheading">
          <h1 className="responsive-title">
            Quick <span style={{ color: "#E74E49" }}>Trip</span>{" "}
          </h1>
          <h4 style={{ fontStyle: "italic" }}>
            Effortless Car Reservations for Every Destination
          </h4>
          <p>
            Quick Trip makes finding the perfect car for your journey a breeze.
            Simply select your pickup and drop-off locations, and let us connect
            you with the best options available. Wherever you're headed, Quick
            Trip ensures a smooth ride every time.
          </p>

          <div>
            <Form size="large" layout="vertical">
              <Form.Item name={"From"} label={"From"}>
                <Input />
              </Form.Item>
              <Form.Item name={"To"} label={"To"}>
                <Input />
              </Form.Item>
              <Button style={{ marginTop: "5px" }}>Search Car</Button>
            </Form>
          </div>
        </div>
      </Col>
      <Col span={24} md={{ span: 24 }} lg={{ span: 12 }}>
        <div className="custom-bannerheading">
          <Carousel autoplay>
            <Image src={bmw} />
            <Image src={tesla} />
            <Image src={audi} />
            <Image src={ford} />
          </Carousel>{" "}
        </div>
      </Col>
    </Row>
  );
};

export default Banner;
