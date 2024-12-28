import { useGetAllCarQuery } from "../../../redux/features/admin/carManagement.api";

const AllCars = () => {
  const { data: cars } = useGetAllCarQuery(undefined);
  console.log(cars);
  return <div>All Cars</div>;
};

export default AllCars;
