/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetMyBookingsQuery } from "../../redux/features/user/getMyBooking.api";

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

const MyBookings = () => {
  const { data } = useGetMyBookingsQuery(undefined);
  console.log(data);

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
      // dataSource={[]}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default MyBookings;
