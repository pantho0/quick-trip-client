import { TCarManagement } from "../../../types/carManagement.type";
import { TResponseRedux } from "../../../types/global.types";
import { baseApi } from "../../api/baseApi";

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCar: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TCarManagement[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    addCar: builder.mutation({
      query: (carData) => ({
        url: "/cars",
        method: "POST",
        body: carData,
      }),
    }),
  }),
});

export const { useGetAllCarQuery, useAddCarMutation } = carManagementApi;
