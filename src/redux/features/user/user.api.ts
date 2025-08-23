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

    })
});



export const {
    useGetAllDataQuery,
} = userApi;