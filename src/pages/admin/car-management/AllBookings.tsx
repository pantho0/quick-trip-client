import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllBookingsQuery } from "../../../redux/features/admin/bookingManagement.api";

interface DataType {
  key: string;
  bookedCar: string;
  pricePerHour: string;
  passengerName: string;
  passengerPhone: string;
  passengerEmail: string;
  date: string;
  startTime: string;
  endTime: string;
  totalCost: string;
}

const AllBookings = () => {
  const { data: bookings } = useGetAllBookingsQuery(undefined);
  console.log(bookings);

  const bookingData = bookings?.map((booking) => ({
    key: booking._id,
    bookedCar: booking.carId.name,
    pricePerHour: booking.carId.pricePerHour,
    passngerName: booking.user.name,
    passengerPhone: booking.user.phone,
    passengerEmail: booking.user.email,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime,
    totalCost: booking.totalCost,
  }));

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
      title: "Price(Hourly)",
      dataIndex: "pricePerHour",
      // defaultSortOrder: "descend",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Passenger",
      dataIndex: "passngerName",
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
      title: "Journey Start Time",
      dataIndex: "startTime",
    },
    {
      title: "Journey End Time",
      dataIndex: "endTime",
    },
    {
      title: "Total Bill",
      dataIndex: "totalCost",
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
      //   loading={isFetching}
      dataSource={bookingData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AllBookings;
