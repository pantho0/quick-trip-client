import { useParams } from "react-router-dom";
import { useGetSingleCarQuery } from "../../redux/features/admin/carManagement.api";
import "../../styles/globalButton.css";
import {
  Button,
  Col,
  DatePicker,
  DatePickerProps,
  Flex,
  GetProps,
  Row,
} from "antd";
import moment from "moment";
import { useState } from "react";

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const CreateBooking = () => {
  const { id } = useParams();
  const [endTime, setEndTime] = useState("");
  const { data: car, isLoading, isFetching } = useGetSingleCarQuery(id);

  console.log(car);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Create Booking</h1>
      </div>
      <Row justify="center" align="top" style={{ minHeight: "100vh" }}>
        <Col
          span={6}
          style={{ marginTop: "15px", textAlign: "left", padding: "30px 0px" }}
        >
          <p style={{ marginBottom: "10px", fontSize: "18px" }}>
            Car Name : {car?.name}
          </p>
          <p style={{ marginBottom: "10px", fontSize: "18px" }}>
            Hourly Price : ${car?.pricePerHour}
          </p>

          <Flex vertical gap={10} justify="center">
            <DatePicker
              showTime
              onChange={(
                _value: DatePickerProps["value"] | RangePickerProps["value"],
                dateString
              ) => {
                const time =
                  moment(dateString).format("YYYY-MM-DDTHH:mm:ss") + "Z";
                setEndTime(time);
              }}
            />
            <Button className="globalButton">Confirm Booking</Button>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default CreateBooking;
