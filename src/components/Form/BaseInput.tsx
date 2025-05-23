import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
import { ReactNode } from "react";

type TInputProps = {
  type: string;
  name: string;
  label?: string | ReactNode;
};

const BaseInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input size="large" {...field} type={type} id={name} />{" "}
            {error && <small style={{ color: "red" }}>{error?.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BaseInput;
