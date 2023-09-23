/* eslint-disable no-unused-vars */
import SectionTitle from "../../components/SectionTitle";
import CSkeleton from "../../components/customComponent/CSkeleton";
import { useGetAllUsersQuery } from "../../redux/features/users/user-api-slice";

const Users = () => {

    const { isError, isLoading, data: users, error } = useGetAllUsersQuery();
    console.log(users);

    return (
        <main>
            <SectionTitle subHeading="------ join with us! ------" heading="All Users"></SectionTitle>
            {
                isLoading && <CSkeleton />
            }
            {
                isError && <h2 className='text-center text-red-500'>{error?.error}</h2>
            }
            <section className="">
                
            </section>
        </main>
    );
};

export default Users;