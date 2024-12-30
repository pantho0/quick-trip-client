import { TBooking, TResponseRedux } from "../../../types/global.types";
import { baseApi } from "../../api/baseApi";

const bookingManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: () => {
        return {
          url: "/bookings",
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetAllBookingsQuery } = bookingManagementApi;
