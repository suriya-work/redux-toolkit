import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartSliceApi = createApi({
    reducerPath: 'cartSliceApi',
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com"}),
    endpoints: (builder) => ({
        getAllCart: builder.query({
            query: () => `products`,
        }),
    }),
})

export const { useGetAllCartQuery } = cartSliceApi;