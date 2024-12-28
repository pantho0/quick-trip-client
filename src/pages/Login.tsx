/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "admin@example.com",
      password: "password123",
    },
  });

  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const toastId = toast.loading("Logging in...");
      const res = await login(data).unwrap();
      const decodedUser = verifyToken(res?.data?.token) as TUser;
      dispatch(setUser({ user: decodedUser, token: res.data.token }));
      toast.success("User Logged In", { id: toastId, duration: 2000 });
      navigate(`/${decodedUser?.role}/dashboard`);
    } catch (error: any) {
      toast.success(error?.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">email</label>
        <input type="text" id="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">login</Button>
    </form>
  );
};

export default Login;
