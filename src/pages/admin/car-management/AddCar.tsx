import { Button, Card, Col, Form, Input, Row, Typography, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import BaseForm from "../../../components/Form/BaseForm";
import BaseInput from "../../../components/Form/BaseInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import BaseSelect from "../../../components/Form/BaseSelect";
import BaseCustomSelect from "../../../components/Form/BaseCustomSelect";
import { useAddCarMutation } from "../../../redux/features/admin/carManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global.types";
import styles from "./AddCar.module.css";

const { Title } = Typography;

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
    <div className={styles.container}>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Card className={styles.formCard}>
            <Title level={2} className={styles.title}>
              Add a New Car
            </Title>
            <BaseForm onSubmit={onSubmit}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12} className={styles.fullWidth}>
                  <BaseInput type="text" name="name" label="Name" />
                </Col>
                <Col xs={24} md={12} className={styles.fullWidth}>
                  <BaseInput type="text" name="color" label="Color" />
                </Col>
                <Col xs={24} md={12} className={styles.fullWidth}>
                  <Controller
                    name="image"
                    render={({ field: { onChange } }) => (
                      <Form.Item label="Car Image" className={styles.formItem}>
                        <Upload
                          listType="picture"
                          maxCount={1}
                          style={{ width: "100%" }}
                          beforeUpload={(file) => {
                            onChange(file);
                            return false;
                          }}
                          onRemove={() => onChange(undefined)}
                        >
                          <Button
                            icon={<UploadOutlined />}
                            block
                            className={styles.uploadButton}
                          >
                            Click to Upload
                          </Button>
                        </Upload>
                      </Form.Item>
                    )}
                  />
                </Col>
                <Col xs={24} md={12} className={styles.fullWidth}>
                  <BaseSelect
                    name="isElectric"
                    label="Electric or Not?"
                    options={isElectricOptions}
                  />
                </Col>
                <Col xs={24} md={24} className={styles.fullWidth}>
                  <BaseInput
                    type="number"
                    name="pricePerHour"
                    label="Price per hour"
                  />
                </Col>
                <Col xs={24} className={styles.fullWidth}>
                  <BaseCustomSelect
                    name="features"
                    label="Features"
                    className={styles.customFeaturesDropdown}
                    dropdownClassName={styles.customFeaturesDropdownMenu}
                  />
                </Col>
                <Col xs={24} className={styles.fullWidth}>
                  <BaseInput
                    type="description"
                    name="description"
                    label="Description"
                  />
                </Col>
                <Col
                  xs={24}
                  className={styles.fullWidth}
                  style={{ marginTop: 16 }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                    className={styles.submitButton}
                  >
                    Add Car
                  </Button>
                </Col>
              </Row>
            </BaseForm>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddCar;
