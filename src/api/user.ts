
import { IUser } from '@/interfaces/user';
import { pause } from '@/utils/pause';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApi = createApi({
    reducerPath: "users",
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL, fetchFn: async (...arg) => {
            await pause(1000);
            return await fetch(...arg)
        }
    }),
    endpoints: (builder) => ({
        getusers: builder.query<IUser[], void>({
            query: () => `/users`,
            providesTags: ['User']
        }),
        getUserById: builder.query<IUser, number | string>({
            query: (id) => `/users/${id}`,
            providesTags: ['User']
        }),
        addUser: builder.mutation<IUser, IUser>({
            query: (user) => ({
                url: `/users`,
                method: "POST",
                body: user
            }),
            invalidatesTags: ['User']
        }),
        removeUser: builder.mutation<void, number | string>({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['User']
        }),
        updateUser: builder.mutation<IUser, IUser>({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: "PATCH",
                body: user
            }),
            invalidatesTags: ['User']
        })
    })
});
export const {
    useGetusersQuery,
    useAddUserMutation,
    useGetUserByIdQuery,
    useRemoveUserMutation,
    useUpdateUserMutation
} = userApi;
export const userReducer = userApi.reducer;
export default userApi;