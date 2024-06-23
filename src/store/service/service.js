import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.weatherbit.io/v2.0/" }),
  tagTypes:['weatherendpoint'],
  endpoints: (builder) => ({}),
});
