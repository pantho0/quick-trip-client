import { selectUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";
import { ArrowDownOutlined, CarFilled, CarOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

const Dashboard = () => {
  const user = useAppSelector(selectUser);
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <Card
            bordered={false}
            style={{ backgroundColor: "rgb(214, 240, 230)" }}
          >
            <Statistic
              title="Ongoing Trips"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#059862" }}
              prefix={<CarOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <Card
            bordered={false}
            style={{ backgroundColor: "rgb(253, 246, 230)" }}
          >
            <Statistic
              title="Total Trips"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#faad14" }}
              prefix={<CarFilled />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <Card
            bordered={false}
            style={{ backgroundColor: "rgb(214, 235, 255)" }}
          >
            <Statistic
              title="Total Earnings"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#1890ff" }}
              prefix={"$"}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <Card
            bordered={false}
            style={{ backgroundColor: "rgb(214, 235, 255)" }}
          >
            <Statistic
              title="Total Cars"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#059862" }}
              prefix={<CarOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <Card bordered={false} style={{ backgroundColor: "#D6F0E6" }}>
            <Statistic
              title="Total Users"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#faad14" }}
              prefix={<CarFilled />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <Card bordered={false} style={{ backgroundColor: "#FDF6E6" }}>
            <Statistic
              title="Total Earnings"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#1890ff" }}
              prefix={"$"}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
