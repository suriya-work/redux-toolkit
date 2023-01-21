import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartSliceApi = createApi({
    reducerPath: 'cartSliceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getAllCart: builder.query({
            query: (name) => `cart/${name}`,
        }),
    }),
})

export const { useGetAllCartQuery } = cartSliceApi;