import { Button, Card, Col, Flex, Pagination, Row, Tag } from "antd";
import { useGetAllCarQuery } from "../../redux/features/admin/carManagement.api";
import { Link } from "react-router-dom";
import "../../styles/globalButton.css";
import Loader from "../shared/Loader";
import { useEffect, useRef, useState } from "react";
import "./availableCar.css";
import "./pagination.css";

const AvailableCars = () => {
  const [page, setPage] = useState(1);

  const topRef = useRef<HTMLDivElement>(null);

  const {
    data: cars,
    isFetching,
    isLoading,
    isSuccess,
  } = useGetAllCarQuery([
    {
      name: "page",
      value: page,
    },
    {
      name: "sort",
      value: "-_id",
    },
  ]);

  useEffect(() => {
    if (isSuccess && !isFetching && !isLoading && topRef.current) {
      const yOffset = -80; // Adjust this value based on your header height
      const y = topRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [isSuccess, isFetching, isLoading, page]);

  const { Meta } = Card;

  if (isFetching && isLoading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        padding: "20px 0",
      }}
    >
      <div ref={topRef} style={{ position: 'absolute', top: '-100px' }} />
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "#e0e0e0",
            padding: "20px 0",
            marginBottom: "20px",
            fontSize: "2.5rem",
            fontWeight: 600,
          }}
        >
          Available Cars
        </h1>
      </div>
      <Row gutter={[16, 16]}>
        {cars?.data?.map((car) => (
          <Col key={car._id} xs={24} sm={12} md={8} lg={6}>
            <Card
              className="ant-card-body"
              loading={isFetching && isLoading}
              hoverable
              style={{
                width: "100%",
                minHeight: "500px",
                backgroundColor: "#2a2a2a",
                border: "1px solid #444",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
              bodyStyle={{ padding: "16px" }}
              cover={
                <img
                  alt={car?.name}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "200px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                  src={car?.images}
                />
              }
            >
              <div className="card-content" style={{ color: "#b0b0b0" }}>
                <Meta
                  title={
                    <span style={{ color: "#fff", fontSize: "1.2rem" }}>
                      {car?.name}
                    </span>
                  }
                  description={
                    <span style={{ color: "#b0b0b0" }}>
                      {`${car?.description.slice(0, 50)}...`}
                    </span>
                  }
                />
                <p style={{ marginTop: "10px", color: "#059862" }}>
                  <strong>${car?.pricePerHour}</strong> / hour
                </p>
                <div style={{ marginTop: "10px" }}>
                  <p style={{ marginBottom: "5px" }}>
                    <strong>Features:</strong>
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}
                  >
                    {car?.features?.slice(0, 3)?.map((f) => (
                      <Tag
                        color="#059862"
                        style={{
                          margin: 0,
                          backgroundColor: "rgba(5, 152, 98, 0.1)",
                          color: "#059862",
                          border: "1px solid #059862",
                        }}
                        key={f}
                      >
                        {f}
                      </Tag>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/user/create-booking/${car?._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Flex
                    justify="center"
                    style={{ marginTop: "20px", width: "100%" }}
                  >
                    <Button
                      type="primary"
                      disabled={car?.status === "booked"}
                      style={{
                        width: "100%",
                        backgroundColor:
                          car?.status === "available" ? "#059862" : "#666",
                        borderColor:
                          car?.status === "available" ? "#059862" : "#666",
                        height: "40px",
                        fontSize: "1rem",
                        fontWeight: 500,
                      }}
                    >
                      {car?.status === "available"
                        ? "Book Now"
                        : "Already Booked"}
                    </Button>
                  </Flex>
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Flex justify="center" style={{ marginTop: "40px", padding: "0 20px" }}>
        <Pagination
          current={page}
          onChange={(value) => setPage(value)}
          pageSize={cars?.meta?.limit}
          total={cars?.meta?.total}
          className="custom-pagination"
        />
      </Flex>
    </div>
  );
};

export default AvailableCars;
