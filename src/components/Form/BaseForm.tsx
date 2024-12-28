import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ReactNode } from "react";
import { Form } from "antd";

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

const BaseForm = ({ children, onSubmit, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default BaseForm;
