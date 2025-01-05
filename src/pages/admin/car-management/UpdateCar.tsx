import { Button, Col, Flex, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import BaseForm from "../../../components/Form/BaseForm";
import BaseInput from "../../../components/Form/BaseInput";
import BaseSelect from "../../../components/Form/BaseSelect";
import BaseCustomSelect from "../../../components/Form/BaseCustomSelect";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import {
  useGetSingleCarQuery,
  useUpdateCarMutation,
} from "../../../redux/features/admin/carManagement.api";
import Loader from "../../../components/shared/Loader";
import { toast } from "sonner";

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
  const [updateCar] = useUpdateCarMutation();

  const features = carData?.features || [];
  const defaultValues = {
    name: carData?.name,
    description: carData?.description,
    color: carData?.color,
    isElectric: carData?.isElectric,
    features: carData?.features,
    pricePerHour: carData?.pricePerHour,
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating Car...");
    const updatedCarInfo = {
      ...data,
      status: "available",
      isDeleted: false,
      pricePerHour: Number(data?.pricePerHour),
    };

    console.log(data?.image);
    const formData = new FormData();
    formData.append("file", data?.image);
    formData.append("data", JSON.stringify(updatedCarInfo));

    try {
      const res = await updateCar({ id: id, carData: formData });
      if (res?.data?.success) {
        toast.success("Car Updated", { id: toastId, duration: 2000 });
      } else {
        toast.error("Failed to update car", { id: toastId, duration: 2000 });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
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
              <BaseForm onSubmit={onSubmit} defaultValues={defaultValues}>
                <BaseInput type="text" name="name" label="Name" />
                <Controller
                  name="image" // Ensure this matches the field name in the form state
                  render={({ field: { onChange, value, ...field } }) => (
                    <Form.Item>
                      <Input
                        {...field}
                        type="file"
                        value={value?.fileName}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          console.log("Selected file:", file); // Debugging log
                          onChange(file);
                        }}
                      />
                    </Form.Item>
                  )}
                />
                <BaseInput type="text" name="description" label="Description" />
                <BaseInput type="text" name="color" label="Color" />
                <BaseSelect
                  name="isElectric"
                  label="Electric or Not?"
                  options={isElectricOptions}
                />
                <BaseCustomSelect
                  name="features"
                  label="Features"
                  defaulItems={features}
                />
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
                    Update Car
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
