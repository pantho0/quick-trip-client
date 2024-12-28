import { Button, Col, Flex } from "antd";
import BaseForm from "../../../components/Form/BaseForm";
import BaseInput from "../../../components/Form/BaseInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import BaseSelect from "../../../components/Form/BaseSelect";
import BaseCustomSelect from "../../../components/Form/BaseCustomSelect";

const AddCar = () => {
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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", padding: "20px" }}>Add a new car</h2>
      <Flex justify="center" align="center">
        <Col span={6}>
          <BaseForm onSubmit={onSubmit}>
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
            <BaseCustomSelect name="Features" />
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
