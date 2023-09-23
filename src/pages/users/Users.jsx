/* eslint-disable no-unused-vars */
import SectionTitle from "../../shared/SectionTitle";
import CSkeleton from "../../components/customComponent/CSkeleton";
import { useGetAllUsersQuery } from "../../redux/features/users/user-api-slice";
import User from "../../components/users/User";

const Users = () => {

    const { isError, isLoading, data: users, error } = useGetAllUsersQuery();
    console.log(users);

    return (
        <main className="container mx-auto p-2">
            <SectionTitle subHeading="------ Introduce with us! ------" heading="All Users"></SectionTitle>
            {
                isLoading && <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    <CSkeleton />
                    <CSkeleton />
                    <CSkeleton />
                </div>
            }
            {
                isError && <h2 className='text-center text-red-500 font-bold text-2xl'>
                    {"Something Went Wrong!! Try again."}
                </h2>
            }
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-2">
                {
                    users ?
                        users.map((user, index) => <User key={index} user={user} />)
                        :
                        (!isLoading && !isError) &&
                        <h2 className='text-red-500  font-bold text-2xl text-center md:col-span-2 xl:col-span-3'>
                            No Users Data Found!!!
                        </h2>
                }
            </section>
        </main>
    );
};

export default Users;