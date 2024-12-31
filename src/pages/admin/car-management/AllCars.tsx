/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Space, Table, Tooltip } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import {
  useDeleteCarMutation,
  useGetAllCarQuery,
} from "../../../redux/features/admin/carManagement.api";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DeleteFilled,
  EditOutlined,
  EyeFilled,
  EyeOutlined,
} from "@ant-design/icons";
import Swal from "sweetalert2";
import { toast } from "sonner";

interface DataType {
  key: string;
  name: string;
  color: string;
  status: string;
  pricePerHour: number;
}

const AllCars = () => {
  const [params, setParams] = useState([]);
  const { data: cars, isFetching } = useGetAllCarQuery(params);
  const [deleteCar] = useDeleteCarMutation();
  const handleDelete = async (id: string) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteCar(id);
          if (!res?.data?.success) {
            toast.error(res?.data?.message);
          } else {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const carFilterOptions = cars?.data?.map((item) => ({
    text: item?.name,
    value: item?.name,
  }));

  const carData = cars?.data?.map(
    ({ _id, name, color, status, pricePerHour }) => ({
      key: _id,
      name: name,
      color: color,
      status: status,
      pricePerHour: pricePerHour,
    })
  );

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: carFilterOptions,
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Color",
      dataIndex: "color",
      // defaultSortOrder: "descend",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        {
          text: "Available",
          value: "available",
        },
        {
          text: "Booked",
          value: "booked",
        },
      ],
      // onFilter: (value, record) => record.status.indexOf(value as string) === 0,
    },
    {
      title: "Price",
      dataIndex: "pricePerHour",
      sorter: (a, b) => a.pricePerHour - b.pricePerHour,
      sortDirections: ["descend"],
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Flex justify="center" gap="16px">
          <Link to={`/admin/car-details/${record.key}`}>
            <Tooltip title="View">
              <EyeFilled style={{ color: "green", fontSize: "16px" }} />
            </Tooltip>{" "}
          </Link>
          <Tooltip title="Update">
            <EditOutlined
              style={{ color: "blue", cursor: "pointer", fontSize: "16px" }}
            />
          </Tooltip>{" "}
          <Tooltip title="Delete">
            <DeleteFilled
              onClick={() => handleDelete(record.key)}
              style={{ color: "red", cursor: "pointer", fontSize: "16px" }}
            />
          </Tooltip>
        </Flex>
      ),
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
      dataSource={carData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AllCars;
