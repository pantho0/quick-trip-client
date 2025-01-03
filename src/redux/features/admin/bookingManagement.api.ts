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
      providesTags: ["bookings"],
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return response.data;
      },
    }),
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData,
      }),
      invalidatesTags: ["bookings"],
    }),
  }),
});

export const { useGetAllBookingsQuery, useCreateBookingMutation } =
  bookingManagementApi;
