import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSummery: builder.query({
            query: (summery) => ({
                url: `analytics/summery`,
                method: "GET",
                data: summery
            })
        }),

        getTransferMoney: builder.query({
            query: (summery) => ({
                url: `analytics/transfer-money`,
                method: "GET",
                data: summery
            })
        }),
        getTransactionSummery: builder.query({
            query: (summery) => ({
                url: `analytics/transition-summery`,
                method: "GET",
                data: summery
            })
        }),
    })
});



export const {
    useGetAllSummeryQuery,
    useGetTransferMoneyQuery,
    useGetTransactionSummeryQuery
} = transactionApi;