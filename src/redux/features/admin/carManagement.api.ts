import { TCarManagement } from "../../../types/carManagement.type";
import { TResponseRedux } from "../../../types/global.types";
import { baseApi } from "../../api/baseApi";

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCar: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: Record<string, any>) =>
            params.append(item.name, item.value)
          );
        }
        return {
          url: "/cars",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["cars"],
      transformResponse: (
        response: TResponseRedux<TCarManagement[] | undefined>
      ) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
    addCar: builder.mutation({
      query: (carData) => ({
        url: "/cars",
        method: "POST",
        body: carData,
      }),
      invalidatesTags: ["cars"],
    }),
    getSingleCar: builder.query({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TCarManagement>) => {
        return response.data;
      },
    }),
    returnCar: builder.mutation({
      query: (bookingInfo) => ({
        url: "/cars/return",
        method: "PUT",
        body: bookingInfo,
      }),
      invalidatesTags: ["bookings"],
    }),
    updateCar: builder.mutation({
      query: ({ id, carData }) => {
        console.log("inside", id);
        for (const [key, value] of carData.entries()) {
          console.log(key, value);
        }
        return {
          url: `/cars/${id}`,
          method: "PATCH",
          body: carData,
        };
      },
      invalidatesTags: ["cars"],
    }),
    deleteCar: builder.mutation({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cars"],
    }),
  }),
});

export const {
  useGetAllCarQuery,
  useAddCarMutation,
  useGetSingleCarQuery,
  useReturnCarMutation,
  useDeleteCarMutation,
  useUpdateCarMutation,
} = carManagementApi;
