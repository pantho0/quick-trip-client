import { Carousel, Col, Image, Row } from "antd";

const SliderSection = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <Row>
      <Col span={12}></Col>
      <Col span={12}>
        <Carousel afterChange={onChange} autoplay>
          <div>
            <Image
              style={{ borderRadius: "50px" }}
              width={600}
              height={500}
              src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <Image
              width={600}
              height={500}
              style={{ borderRadius: "50px" }}
              src="https://images.unsplash.com/photo-1524095838546-2d9b8d00f212?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div>
            <Image
              width={600}
              height={500}
              style={{ borderRadius: "50px" }}
              src="https://images.unsplash.com/photo-1544468607-e7b3e848ff87?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};

export default SliderSection;
