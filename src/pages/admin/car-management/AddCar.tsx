import { Button, Col, Flex, Form, Input } from "antd";
import BaseForm from "../../../components/Form/BaseForm";
import BaseInput from "../../../components/Form/BaseInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import BaseSelect from "../../../components/Form/BaseSelect";
import BaseCustomSelect from "../../../components/Form/BaseCustomSelect";
import { useAddCarMutation } from "../../../redux/features/admin/carManagement.api";
import { toast } from "sonner";
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
      pricePerHour: Number(data?.pricePerHour),
    };

    const formData = new FormData();
    formData.append("file", data?.image);
    formData.append("data", JSON.stringify(carData));

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const res = (await addCar(formData)) as TResponse<any>;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId, duration: 2000 });
      } else {
        toast.success("Car Added Successfully", {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "20px" }}>Add a new car</h2>
      <Flex justify="center" align="center">
        <Col span={6}>
          <BaseForm onSubmit={onSubmit}>
            <BaseInput type="text" name="name" label="Name" />
            <Controller
              name="image" // Ensure this matches the field name in the form state
              render={({ field: { onChange, value, ...field } }) => (
                <Form.Item>
                  <Input
                    {...field}
                    type="file"
                    value={value?.fileName}
                    onChange={
                      (e) => onChange(e.target.files?.[0]) // Update the form state
                    }
                  />
                </Form.Item>
              )}
            />
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
        </Col>
      </Flex>
    </div>
  );
};

export default AddCar;
