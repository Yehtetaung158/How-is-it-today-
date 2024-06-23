import { weatherApi } from "../service";

const weatherEndpoint=weatherApi.injectEndpoints({
    endpoints: (builder) => ({
        getByCityHourly: builder.mutation({
            query:(city)=>({
                url:`forecast/hourly?city=${city}&hours=24&key=3ec49714711544a1914300ffaf3bff7d`,
                method:"POST"
            }),
            invalidatesTags:['weatherendpoint']
        }),
        getCurrentByCity: builder.mutation({
            query:(city)=>({
                url:`current?city=${city}&key=3ec49714711544a1914300ffaf3bff7d`,
                method:"POST"
            }),
            providesTags:['weatherendpoint']

        })
    }),
})

export const {useGetByCityHourlyMutation,useGetCurrentByCityMutation}=weatherEndpoint;