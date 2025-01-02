import { selectUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";

const Dashboard = () => {
  const user = useAppSelector(selectUser);
  return <div>this is dashboard for {user?.role}</div>;
};

export default Dashboard;
