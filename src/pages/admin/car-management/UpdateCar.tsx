import { Button, Col, Flex } from "antd";
import { useParams } from "react-router-dom";
import BaseForm from "../../../components/Form/BaseForm";
import BaseInput from "../../../components/Form/BaseInput";
import BaseSelect from "../../../components/Form/BaseSelect";
import BaseCustomSelect from "../../../components/Form/BaseCustomSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { carAddSchema } from "./Cars.Contant";
import { useGetSingleCarQuery } from "../../../redux/features/admin/carManagement.api";
import Loader from "../../../components/shared/Loader";

const isElectricOptions = [
  {
    value: true,
    label: "Yes",
  },
  {
    value: false,
    label: "No",
  },
];

const UpdateCar = () => {
  const { id } = useParams();
  const { data: carData, isFetching } = useGetSingleCarQuery(id);

  const defaultValues = {
    name: carData?.name,
    description: carData?.description,
    color: carData?.color,
    isElectric: carData?.isElectric,
    features: carData?.features,
    pricePerHour: carData?.pricePerHour,
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  if (isFetching) {
    return <Loader />;
  }

  if (!isFetching) {
    return (
      <div>
        <h2 style={{ textAlign: "center", padding: "20px" }}>Update Car</h2>
        <Flex justify="center" align="center">
          <Col span={6}>
            {defaultValues && (
              <BaseForm
                onSubmit={onSubmit}
                defaultValues={defaultValues}
                resolver={zodResolver(carAddSchema)}
              >
                <BaseInput type="text" name="name" label="Name" />
                <BaseInput type="text" name="description" label="Description" />
                <BaseInput type="text" name="color" label="Color" />
                <BaseSelect
                  name="isElectric"
                  label="Electric or Not?"
                  options={isElectricOptions}
                />
                <BaseCustomSelect name="features" label="Features" />
                <BaseInput
                  type="number"
                  name="pricePerHour"
                  label="Price per hour"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button size="large" htmlType="submit">
                    Add Car
                  </Button>
                </div>
              </BaseForm>
            )}
          </Col>
        </Flex>
      </div>
    );
  }
};

export default UpdateCar;
