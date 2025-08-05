import { useParams } from "react-router-dom";
import { useGetSingleCarQuery } from "../../../redux/features/admin/carManagement.api";
import { Card, Flex, Tag, Typography, Space, Divider } from "antd";
import Loader from "../../../components/shared/Loader";
const { Title, Text } = Typography;

const CarDetails = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetSingleCarQuery(id);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <Flex
      justify="center"
      align="center"
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <Card
        hoverable
        style={{ width: 600, borderRadius: "10px", overflow: "hidden" }}
        cover={
          <img
            alt={data?.name}
            src={data?.images}
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        }
      >
        <Space direction="vertical" size={[0, 16]} style={{ width: "100%" }}>
          <Title level={3} style={{ margin: 0, color: "white" }}>
            {data?.name}
          </Title>
          <Text style={{ color: "white" }}>{data?.description}</Text>

          <Divider style={{ color: "white" }} orientation="center">
            Details
          </Divider>
          <div>
            <Flex
              justify="space-between"
              align="center"
              style={{ marginBottom: "8px" }}
            >
              <Text strong style={{ color: "white" }}>
                Hourly Price:
              </Text>
              <Text style={{ color: "white" }}>${data?.pricePerHour}</Text>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              style={{ marginBottom: "8px" }}
            >
              <Text strong style={{ color: "white" }}>
                Current Status:
              </Text>
              <Tag color={data?.status === "available" ? "green" : "yellow"}>
                {data?.status?.toUpperCase()}
              </Tag>
            </Flex>
            <Flex
              justify="space-between"
              align="center"
              style={{ marginBottom: "8px" }}
            >
              <Text strong style={{ color: "white" }}>
                Electric:
              </Text>
              <Text style={{ color: "white" }}>
                {data?.isElectric ? "Yes" : "No"}
              </Text>
            </Flex>
          </div>

          <Divider style={{ color: "white" }} orientation="center">
            Features
          </Divider>
          <Space wrap size={[8, 8]}>
            {data?.features?.map((f) => (
              <Tag key={f} color="blue">
                {f}
              </Tag>
            ))}
          </Space>
        </Space>
      </Card>
    </Flex>
  );
};

export default CarDetails;
