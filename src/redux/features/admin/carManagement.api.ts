import { TCarManagement } from "../../../types/carManagement.type";
import { TResponseRedux } from "../../../types/global.types";
import { baseApi } from "../../api/baseApi";

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCar: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: Record<string, any>) =>
            params.append(item.name, item.value)
          );
        }

        console.log(args);
        return {
          url: "/cars",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["cars"],
      transformResponse: (response: TResponseRedux<TCarManagement[]>) => {
        return {
          data: response?.data,
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
  }),
});

export const { useGetAllCarQuery, useAddCarMutation } = carManagementApi;
