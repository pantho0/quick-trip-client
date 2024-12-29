import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps = {
  name: string;
  label: string;
  options: { value: string | boolean; label: string }[];
};

const BaseSelect = ({ name, label, options }: TSelectProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Select {...field} size="large" options={options} />
            {error && <small style={{ color: "red" }}>{error?.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BaseSelect;
