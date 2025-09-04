import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTransaction: builder.query({
            query: (userInfo) => ({
                url: `transaction/all-history?search=${userInfo.search}&page=${userInfo.pageNumber}&limit=${10}`,
                method: "GET",
                data: userInfo
            })
        }),
        getMyTransaction: builder.query({
            query: (userInfo) => ({
                url: `transaction/history?search=${userInfo.search}&page=${userInfo.pageNumber}&limit=${10}`,
                method: "GET",
                data: userInfo
            })
        }),
    })
});



export const {
    useGetAllTransactionQuery,
    useGetMyTransactionQuery
} = transactionApi;