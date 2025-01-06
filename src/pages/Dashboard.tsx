import { Form, Input, Button, Upload, Card } from "antd";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";

const UserInfoSection = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Updated User Info:", values);
    // Add logic to update user info in the backend
  };

  return (
    <Card
      title="User  Profile"
      bordered={false}
      style={{ marginBottom: "20px" }}
    >
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item label="Profile Picture">
          <Upload>
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Name" name="name">
          <Input prefix={<UserOutlined />} placeholder="Enter your name" />
        </Form.Item>
        <Form.Item label="New Password" name="password">
          <Input.Password placeholder="Enter new password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

import { List } from "antd";

const RecentActivities = () => {
  const data = [
    "Trip booked to New York",
    "Payment received for Trip #123",
    "User  John Doe updated their profile",
    "New car added to the fleet",
  ];

  return (
    <Card title="Recent Activities" bordered={false}>
      <List
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Card>
  );
};

import { Space } from "antd";

const QuickActions = () => {
  return (
    <Card title="Quick Actions" bordered={false}>
      <Space>
        <Button type="primary">Add New Car</Button>
        <Button type="primary">Create Trip</Button>
        <Button type="primary">View Reports</Button>
      </Space>
    </Card>
  );
};

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", trips: 40, earnings: 2400 },
  { name: "Feb", trips: 30, earnings: 1398 },
  { name: "Mar", trips: 20, earnings: 9800 },
  { name: "Apr", trips: 27, earnings: 3908 },
  { name: "May", trips: 18, earnings: 4800 },
  { name: "Jun", trips: 23, earnings: 3800 },
  { name: "Jul", trips: 34, earnings: 4300 },
  { name: "Aug", trips: 34, earnings: 4300 },
  { name: "Sep", trips: 34, earnings: 4300 },
  { name: "Oct", trips: 34, earnings: 4300 },
  { name: "Nov", trips: 34, earnings: 4300 },
  { name: "Dec", trips: 34, earnings: 4300 },
];

const ChartsSection = () => {
  return (
    <Card title="Trip Trends" bordered={false}>
      <LineChart width={450} height={315} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="trips" stroke="#8884d8" />
        <Line type="monotone" dataKey="earnings" stroke="#82ca9d" />
      </LineChart>
    </Card>
  );
};

import { Row, Col } from "antd";

const Dashboard = () => {
  return (
    <div>
      {/* First Row: TripTrend Chart and UserProfile */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ChartsSection />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <UserInfoSection />
        </Col>
      </Row>

      {/* Second Row: RecentActivities and QuickActions */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <RecentActivities />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <QuickActions />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
