import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userSlice = createApi({
  reducerPath: 'userSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({

    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET"
      }),
    }),

    getUserById: builder.query({
      query: (id) => {
        console.log("id:",id);
        return {
          url: `/users/${id}`,
          method: "GET"
        }
      }
    })

  }),
})

export const { useGetAllUsersQuery, useGetUserByIdQuery } = userSlice;