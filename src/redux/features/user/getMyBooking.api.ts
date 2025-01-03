import { TBooking, TResponseRedux } from "../../../types/global.types";
import { baseApi } from "../../api/baseApi";

const getMyBookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyBookings: builder.query({
      query: () => {
        return {
          url: "/bookings/my-bookings",
          method: "GET",
        };
      },
      providesTags: ["bookings"],
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetMyBookingsQuery } = getMyBookingsApi;
