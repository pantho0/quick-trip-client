import { FormProvider, useForm } from "react-hook-form";

const BaseForm = ({ children, onSubmit }) => {
  const methods = useForm({
    defaultValues: {
      email: "admin@example.com",
      password: "password123",
    },
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default BaseForm;
