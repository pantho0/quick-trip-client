import { Card, Flex } from "antd";
import { useGetAllCarQuery } from "../../redux/features/admin/carManagement.api";

const AvailableCars = () => {
  const { data: cars, isFetching, isLoading } = useGetAllCarQuery(undefined);
  console.log(cars);

  const { Meta } = Card;

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#2a2c31", padding: "20px 0" }}>
        --Available Cars--
      </h1>
      <Flex gap="middle" align="start">
        <Card
          loading={isFetching && isLoading}
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Flex>
    </div>
  );
};

export default AvailableCars;
