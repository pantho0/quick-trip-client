/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Image, Row, Typography, Space } from "antd";
import { motion } from "framer-motion";
import tesla from "../../assets/images/tesla.jpg";
import "../../styles/banner.css";
import BaseForm from "../Form/BaseForm";
import BaseSelect from "../Form/BaseSelect";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

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

  const onSubmit = (_data: Record<string, any>) => {
    navigate("/booking");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <Row
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          minHeight: "500px",
          background: "#1a1a1a",
        }}
        gutter={[24, 24]}
        align="middle"
      >
        <Col
          span={24}
          md={24}
          lg={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <motion.div
            variants={item}
            transition={{ duration: 0.8 }}
            className="custom-banner-content"
          >
            <Title
              level={1}
              style={{
                color: "#059862",
                fontWeight: 700,
                marginBottom: "0.2em",
              }}
            >
              Quick <span style={{ color: "#fff" }}>Trip</span>
            </Title>
            <Title level={3} style={{ color: "#e0e0e0", marginBottom: "1em" }}>
              Effortless Car Reservations for Every Destination
            </Title>

            <Text style={{ color: "#b0b0b0", marginBottom: "2em" }}>
              Quick Trip makes finding the perfect car for your journey a
              breeze. Simply select your pickup and drop-off locations, and let
              us connect you with the best options available. Wherever you're
              headed, Quick Trip ensures a smooth ride every time.
            </Text>

            <BaseForm onSubmit={onSubmit}>
              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <Row gutter={[16, 16]} align="middle">
                  <Col xs={24} sm={12} md={12}>
                    <BaseSelect
                      name="from"
                      label="Pickup Location"
                      options={locations}
                      className="base-select dark-select"
                    />
                  </Col>
                  <Col xs={24} sm={12} md={12}>
                    <BaseSelect
                      name="to"
                      label="Drop-off Location"
                      options={locations}
                      className="base-select dark-select"
                    />
                  </Col>
                </Row>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    padding: "12px 24px",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Search Car
                </Button>
              </Space>
            </BaseForm>
          </motion.div>
        </Col>

        <Col
          span={24}
          md={24}
          lg={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <motion.div
            variants={item}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="custom-banner-image"
          >
            <div className="single-car-image">
              <Image
                src={tesla}
                alt="Premium Car"
                preview={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <div className="image-overlay" />
            </div>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Banner;
