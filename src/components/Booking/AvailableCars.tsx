import { Button, Card, Col, Flex, Pagination, Row, Tag } from "antd";
import { useGetAllCarQuery } from "../../redux/features/admin/carManagement.api";
import { Link } from "react-router-dom";
import "../../styles/globalButton.css";
import Loader from "../shared/Loader";
import { useState } from "react";
import "./availableCar.css";

const AvailableCars = () => {
  const [page, setPage] = useState(1);
  const {
    data: cars,
    isFetching,
    isLoading,
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

  const { Meta } = Card;

  if (isFetching && isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "#2a2c31",
            padding: "20px 0",
            marginBottom: "20px",
          }}
        >
          --Available Cars--
        </h1>
      </div>
      <Row gutter={[16, 16]}>
        {cars?.data?.map((car) => (
          <Col key={car._id} xs={24} sm={12} md={8} lg={6}>
            <Card
              className="ant-card-body"
              loading={isFetching && isLoading}
              hoverable
              style={{ width: "100%", minHeight: "500px" }}
              cover={
                <img
                  alt="example"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "200px",
                  }}
                  src={car?.images}
                />
              }
            >
              <div className="card-content">
                <Meta
                  title={car?.name}
                  description={`${car?.description.slice(0, 50)}...`}
                />
                <p style={{ marginTop: "3px" }}>
                  Hourly Price : ${car?.pricePerHour}
                </p>
                <p style={{ marginTop: "3px" }}>
                  Features :<br />
                  {car?.features?.slice(0, 3)?.map((f) => (
                    <Tag color="green" style={{ margin: "2px" }} key={f}>
                      <li>{f}</li>
                    </Tag>
                  ))}
                </p>
                <Link to={`/user/create-booking/${car?._id}`}>
                  <Flex
                    justify="center"
                    style={{ marginTop: "10px", width: "100%" }}
                  >
                    <Button
                      type="primary"
                      disabled={car?.status === "booked"}
                      className={`${
                        car?.status === "available" ? "globalButton" : ""
                      } `}
                      style={{ width: "100%" }}
                    >
                      {`${
                        car?.status === "available" ? "Book Now" : "Booked  "
                      }`}
                    </Button>
                  </Flex>
                </Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Flex justify="flex-end" style={{ marginTop: "20px" }}>
        <Pagination
          onChange={(value) => setPage(value)}
          pageSize={cars?.meta?.limit}
          total={cars?.meta?.total}
        />
      </Flex>
    </>
  );
};

export default AvailableCars;
