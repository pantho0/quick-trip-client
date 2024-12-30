import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllBookingsQuery } from "../../../redux/features/admin/bookingManagement.api";
import moment from "moment";

type DataType = {
  key: string;
  bookedCar: string;
  pricePerHour: number;
  passengerName: string;
  passengerPhone: string;
  passengerEmail: string;
  date: string | number;
  startTime: string | number;
  endTime: string | number;
  totalCost: number;
};

const AllBookings = () => {
  const { data: bookings, isFetching } = useGetAllBookingsQuery(undefined);
  console.log(bookings);

  const bookingData =
    bookings?.map((booking) => ({
      key: booking._id,
      bookedCar: booking.carId.name,
      pricePerHour: booking.carId.pricePerHour,
      passengerName: booking.user.name,
      passengerPhone: booking.user.phone,
      passengerEmail: booking.user.email,
      date: moment(Number(booking.date) * 1000).format("llll"),
      startTime: moment(Number(booking.startTime) * 1000).format("llll"),
      endTime:
        booking?.endTime &&
        moment(Number(booking.endTime) * 1000).format("llll"),

      totalCost: booking.totalCost,
    })) || [];

  const columns: TableColumnsType<DataType> = [
    {
      title: "Booked Car",
      dataIndex: "bookedCar",
      //   showSorterTooltip: { target: "full-header" },
      //   filters: carFilterOptions,
      //   // specify the condition of filtering result
      //   // here is that finding the name started with `value`
      //   onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      //   sorter: (a, b) => a.name.length - b.name.length,
      //   sortDirections: ["descend"],
    },
    {
      title: "Passenger",
      dataIndex: "passengerName",
      //   filters: [
      //     {
      //       text: "Available",
      //       value: "available",
      //     },
      //     {
      //       text: "Booked",
      //       value: "booked",
      //     },
      //   ],
      // onFilter: (value, record) => record.status.indexOf(value as string) === 0,
    },
    {
      title: "Phone",
      dataIndex: "passengerPhone",
      //   sorter: (a, b) => a.pricePerHour - b.pricePerHour,
      //   sortDirections: ["descend"],
    },
    {
      title: "Email",
      dataIndex: "passengerEmail",
    },
    {
      title: "Booking Time",
      dataIndex: "date",
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
      render: (_, record) => {
        return (
          <Button
            color={"danger"}
            disabled={record?.endTime ? true : false}
            size="small"
          >
            {record?.endTime ? "Paid" : "Return"}
          </Button>
        );
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
      setParams(queryParams);
    }
  };

  return (
    <Table<DataType>
      columns={columns}
      loading={isFetching}
      dataSource={bookingData && bookingData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AllBookings;
