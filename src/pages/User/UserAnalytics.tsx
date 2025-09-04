import { useGetDataQuery } from "@/redux/features/auth/auth.api";


const UserAnalytics = () => {
    const { data, isLoading } = useGetDataQuery(undefined);

    if (isLoading) {
        return <div className="flex justify-center items-center h-full bg-background px-4 space-x-4">
            <div>Loading...</div>
        </div>
    }

    return (
        <div className="flex justify-center items-center h-full bg-background px-4 space-x-4">
            <div className="font-bold text-3xl">
                My Balance: {Number(data?.data?.wallet?.balance).toFixed(2)} ৳
            </div>
        </div>
    );
};

export default UserAnalytics;