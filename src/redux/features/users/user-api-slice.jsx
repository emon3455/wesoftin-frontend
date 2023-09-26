import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../../../constant/baseURL';

export const userSlice = createApi({
  reducerPath: 'userSlice',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({

    getAllUsers: builder.query({
      query: ({sort}) => ({
        url: "/users",
        method: "GET",
        params: {
          ...(sort && { sort }),
        },
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