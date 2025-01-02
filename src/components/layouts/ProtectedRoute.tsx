import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { logout, selectToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";
import { TUser } from "../../types/global.types";
import { useDispatch } from "react-redux";

const ProtectedRoute = ({
  children,
  role,
}: {
  children: ReactNode;
  role: string;
}) => {
  const token = useAppSelector(selectToken);
  const dispatch = useDispatch();
  let user;

  if (token) {
    user = verifyToken(token) as TUser;
  }

  if (role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
