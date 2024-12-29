import { Button, Col, Flex } from "antd";
import BaseForm from "../../../components/Form/BaseForm";
import BaseInput from "../../../components/Form/BaseInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import BaseSelect from "../../../components/Form/BaseSelect";
import BaseCustomSelect from "../../../components/Form/BaseCustomSelect";
import { useAddCarMutation } from "../../../redux/features/admin/carManagement.api";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TResponse } from "../../../types/global.types";

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

const AddCar = () => {
  const [addCar] = useAddCarMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Adding Car...");

    const carData = {
      ...data,
      status: "available",
      isDeleted: false,
    };

    try {
      const res = (await addCar(carData)) as TResponse;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 2000 });
      } else {
        toast.success("Car Added Successfully");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const carAddSchema = z.object({
    name: z.string({ required_error: "Name is required" }),
    description: z.string({ required_error: "Description is required" }),
    isElectric: z.boolean({ required_error: "Is Electric is required" }),
    pricePerHour: z.number({ required_error: "Price per hour is required" }),
    color: z.string({ required_error: "Color is required" }),
    features: z.array(z.string({ required_error: "Features are required" })),
  });

  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "20px" }}>Add a new car</h2>
      <Flex justify="center" align="center">
        <Col span={6}>
          <BaseForm onSubmit={onSubmit} resolver={zodResolver(carAddSchema)}>
            <BaseInput type="text" name="name" label="Name" />
            <BaseInput
              type="description"
              name="description"
              label="Description"
            />
            <BaseInput type="text" name="color" label="Color" />
            <BaseSelect
              name="isElectric"
              label="Electric or Not?"
              options={isElectricOptions}
            />
            <BaseCustomSelect name="features" label="Features" />
            <BaseInput type="text" name="pricePerHour" label="Price per hour" />
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
        </Col>
      </Flex>
    </div>
  );
};

export default AddCar;
