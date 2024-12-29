/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import BaseForm from "../components/Form/BaseForm";
import BaseInput from "../components/Form/BaseInput";

const Login = () => {
  const defaultValues = {
    email: "admin@example.com",
    password: "password123",
  };

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(data).unwrap();
      const decodedUser = verifyToken(res?.data?.token) as TUser;
      dispatch(setUser({ user: decodedUser, token: res.data.token }));
      toast.success("User Logged In", { id: toastId, duration: 2000 });
      navigate(`/${decodedUser?.role}/dashboard`);
    } catch (error: any) {
      toast.error(error?.message, { id: toastId, duration: 2000 });
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <BaseForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <BaseInput type="text" name="email" label="Email : " />
        <BaseInput type="text" name="password" label="Password : " />
        <Button htmlType="submit">login</Button>
      </BaseForm>
    </Row>
  );
};

export default Login;
