import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
  // baseUrl: "https://car-rental-reservation-backend-alpha.vercel.app/api",
  // baseUrl: "http://localhost:5000/api",
  baseUrl: "https://quick-trip-backend.onrender.com/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", token);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result: any = await baseQuery(args, api, extraOptions);

  console.log(JSON.stringify(result));

  if (result?.error?.status === 400) {
    toast.error(result.error?.data?.message);
  }

  if (result?.error?.status === 404) {
    toast.error(result.error?.data?.message);
  }

  if (result?.error?.status === 401) {
    console.log("Sending refresh token");
    const res = await fetch("http://localhost:5000/api/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    if (data?.data?.token) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(
        setUser({
          user,
          token: data?.data?.token,
        })
      );
    } else {
      api.dispatch(logout());
    }

    result = await baseQuery(args, api, extraOptions);
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["cars", "bookings"],
  endpoints: () => ({}),
});
