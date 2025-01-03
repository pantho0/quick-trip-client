/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Carousel, Col, Image, Row } from "antd";
import tesla from "../../assets/images/tesla.jpg";
import bmw from "../../assets/images/bmw.jpg";
import audi from "../../assets/images/audi.jpg";
import ford from "../../assets/images/ford.jpg";
import "../../styles/banner.css";
import BaseForm from "../Form/BaseForm";
import BaseSelect from "../Form/BaseSelect";
import { useNavigate } from "react-router-dom";

const locations = [
  {
    key: "city1",
    value: "city1",
    label: "City1",
  },
  {
    key: "city2",
    value: "city2",
    label: "City2",
  },
];

const Banner = () => {
  const navigate = useNavigate();

  const onSubmit = (_data: any) => {
    navigate("/booking");
  };
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
            <BaseForm onSubmit={onSubmit}>
              <Row gutter={[8, 2]} align="middle">
                <Col xs={24} sm={12} md={12} lg={12}>
                  <BaseSelect name="from" label="From" options={locations} />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12}>
                  <BaseSelect name="to" label="To" options={locations} />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Button
                    htmlType="submit"
                    size="large"
                    className="search-button"
                  >
                    Search Car
                  </Button>
                </Col>
              </Row>
            </BaseForm>
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
