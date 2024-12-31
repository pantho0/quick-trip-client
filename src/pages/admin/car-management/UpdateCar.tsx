import { useParams } from "react-router-dom";

const UpdateCar = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Update Car {id}</h1>
    </div>
  );
};

export default UpdateCar;
