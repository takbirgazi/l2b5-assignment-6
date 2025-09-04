import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: (userInfo) => ({
                url: "/user/all-users",
                method: "GET",
                data: userInfo
            }),
            providesTags: ["USER"]
        }),

        updateUser: builder.mutation({
            query: (userInfo) => ({
                url: `/user/${userInfo.id}`,
                method: "PATCH",
                data: userInfo.data, 
            }),
            invalidatesTags: ["USER"]
        })

    })
});



export const {
    useGetAllDataQuery,
    useUpdateUserMutation
} = userApi;