import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        cashOut: builder.mutation({
            query: (userInfo) => ({
                url: `/wallet/cash-out/${userInfo.email}`,
                method: "PATCH",
                data: userInfo.data,
            }),
            invalidatesTags: ["TRANSACTION"]
        }),
        senMoney: builder.mutation({
            query: (userInfo) => ({
                url: `/wallet/send-money/${userInfo.email}`,
                method: "PATCH",
                data: userInfo.data,
            }),
            invalidatesTags: ["TRANSACTION"]
        }),
        cashIn: builder.mutation({
            query: (userInfo) => ({
                url: `/wallet/cash-in/${userInfo.email}`,
                method: "PATCH",
                data: userInfo.data,
            }),
            invalidatesTags: ["TRANSACTION"]
        }),



    })
});



export const {
    useCashOutMutation,
    useSenMoneyMutation,
    useCashInMutation
} = walletApi;