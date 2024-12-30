import { useParams } from "react-router-dom";
import { useGetSingleCarQuery } from "../../../redux/features/admin/carManagement.api";
import { Card, Divider, Flex, Tag } from "antd";
const { Meta } = Card;

const CarDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleCarQuery(id);

  console.log(data);

  return (
    <Flex justify="center" align="center">
      <Card
        hoverable
        cover={
          <img
            style={{ width: "100%", height: "200x" }}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title={data?.name} description={data?.description} />
        <div
          style={{
            border: "2px solid #f0f0f0",
            borderRadius: "15px",
            padding: "10px",
            margin: "15px",
            fontSize: "14px",
          }}
        >
          <p>Hourly Price : {data?.pricePerHour}</p>
          <p>
            Current Status :{" "}
            <Tag color={data?.status === "available" ? "green" : "yellow"}>
              {data?.status.toUpperCase()}
            </Tag>{" "}
          </p>
          <p>isElectric : {data?.isElectric}</p>
          <div>
            <p style={{ textAlign: "center", fontSize: "20px", lineHeight: 0 }}>
              Features
            </p>
            <p style={{ textAlign: "center" }}>
              <br />
              {data?.features.map((f) => (
                <Tag style={{ fontSize: "14px" }}>
                  {f} <br />
                </Tag>
              ))}
            </p>
          </div>
        </div>
      </Card>
    </Flex>
  );
};

export default CarDetails;
