import { useParams } from "react-router-dom";
import { useGetSingleCarQuery } from "../../../redux/features/admin/carManagement.api";

const CarDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleCarQuery(id);

  console.log(data);

  return (
    <>
      Car Name : <h1>{data?.name}</h1>
      Hourly Price : <p>{data?.pricePerHour}</p>
      Current Status : <p>{data?.status}</p>
      Description : <p>{data?.description}</p>
      isElectric : <p>{data?.isElectric}</p>
      Features :{" "}
      {data?.features.map((f) => (
        <p>{f}</p>
      ))}
    </>
  );
};

export default CarDetails;
