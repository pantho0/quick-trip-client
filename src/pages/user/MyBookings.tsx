/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetMyBookingsQuery } from "../../redux/features/user/getMyBooking.api";
import moment from "moment";

type DataType =
  | {
      key: string;
      bookedCarName: string;
      pricePerHour: number;
      bookedDate: string | number;
      startTime: string | number;
      endTime: string | number;
      totalCost: number;
    }
  | [];

const MyBookings = () => {
  const { data: bookings } = useGetMyBookingsQuery(undefined);
  console.log(bookings);
  const bookingData =
    bookings?.map((booking) => ({
      key: booking?._id,
      bookedCarName: booking.carId?.name,
      pricePerHour: booking.carId?.pricePerHour,
      bookedDate: moment().format("llll"),
      startTime: moment.utc(booking?.startTime).format("llll"),
      endTime: booking?.endTime && moment.utc(booking?.endTime).format("llll"),
      totalCost: booking?.totalCost || 0,
    })) || [];

  const columns: TableColumnsType<DataType> = [
    {
      title: "Booked Car",
      dataIndex: "bookedCarName",
      //   showSorterTooltip: { target: "full-header" },
      //   filters: carFilterOptions,
      //   // specify the condition of filtering result
      //   // here is that finding the name started with `value`
      //   onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      //   sorter: (a, b) => a.name.length - b.name.length,
      //   sortDirections: ["descend"],
    },
    {
      title: "Price(Hourly)",
      dataIndex: "pricePerHour",
    },
    {
      title: "Booked Date",
      dataIndex: "bookedDate",
    },
    {
      title: "Journey Start Time (a)",
      dataIndex: "startTime",
    },
    {
      title: "Journey End Time (b)",
      dataIndex: "endTime",
    },
    {
      title: "Rent(H)",
      dataIndex: "pricePerHour",
      // defaultSortOrder: "descend",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Total Bill (a*b)",
      dataIndex: "totalCost",
    },
    {
      title: "Action",
      render: (_, record: DataType) => {
        return <Button>hello</Button>;
      },
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra?.action === "filter") {
      const queryParams: any = [];
      filters?.status?.forEach((item) =>
        queryParams.push({ name: "status", value: item })
      );
      // setParams(queryParams);
    }
  };

  return (
    <Table<DataType>
      columns={columns}
      dataSource={bookingData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default MyBookings;
