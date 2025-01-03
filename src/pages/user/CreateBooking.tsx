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
import Loader from "../../components/shared/Loader";
import { useCreateBookingMutation } from "../../redux/features/admin/bookingManagement.api";
import { toast } from "sonner";

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const CreateBooking = () => {
  const { id } = useParams();
  const [startDateAndTime, setStartDateAndTime] = useState("");
  const { data: car, isLoading, isFetching } = useGetSingleCarQuery(id);
  const [bookNow, { error }] = useCreateBookingMutation();

  const confirmBooking = async () => {
    const toastId = toast.loading("Booking");
    const currentDate = moment().format("YYYY-MM-DDTHH:mm:ss[Z]");
    const bookingData = {
      carId: car?._id,
      date: currentDate,
      startTime: startDateAndTime,
    };

    console.log(bookingData);

    try {
      await bookNow(bookingData);
      if (!error?.data?.success) {
        toast.error(error?.data?.message, { id: toastId, duration: 2000 });
      } else {
        toast.success("Booking Successfull", { id: toastId, duration: 2000 });
      }
    } catch (error) {
      toast.error("Something Went Wrong", { id: toastId, duration: 2000 });
    }
  };

  if (isFetching && isLoading) {
    return <Loader />;
  }

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
                setStartDateAndTime(time);
              }}
            />
            <Button
              disabled={car?.status === "booked"}
              onClick={confirmBooking}
              className="globalButton"
            >
              {`${
                car?.status === "booked"
                  ? "Car is already booked"
                  : "Confirm Booking"
              }`}
            </Button>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default CreateBooking;
