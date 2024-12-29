import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

import { useGetAllCarQuery } from "../../../redux/features/admin/carManagement.api";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const AllCars = () => {
  const { data: cars } = useGetAllCarQuery(undefined);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Color",
      dataIndex: "color",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) =>
        record.address.indexOf(value as string) === 0,
    },
    {
      title: "Price",
      dataIndex: "pricePerHour",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) =>
        record.address.indexOf(value as string) === 0,
    },
  ];

  const carData = cars?.data.map(
    ({ _id, name, color, status, pricePerHour }) => ({
      key: _id,
      name: name,
      color: color,
      status: status,
      pricePerHour: pricePerHour,
    })
  );

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table<DataType>
      columns={columns}
      dataSource={carData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AllCars;
