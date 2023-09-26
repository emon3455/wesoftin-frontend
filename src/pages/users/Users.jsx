/* eslint-disable no-unused-vars */
import SectionTitle from "../../shared/SectionTitle";
import CSkeleton from "../../components/customComponent/CSkeleton";
import { useGetAllUsersQuery } from "../../redux/features/users/user-api-slice";
import User from "../../components/users/User";
import { useState } from "react";

const Users = () => {

    const [sort, setSort] = useState(true);
    const { isError, isLoading, data: users, error } = useGetAllUsersQuery(
        { sort: sort ? "asc" : "desc" },
        {
            refetchOnMountOrArgChange: true,
        }
    );
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

            {
                users 
                && 
                <div className="flex gap-x-2 items-center my-5 z-10">
                    <h2 className='text-xl border-l-4 pl-2 border-violet-500 font-bold'>Sort By Age:</h2>
                    <select name="sort" id="sort" onChange={() => setSort(!sort)} className='border-2 border-violet-600 w-32 focus:outline-none'>
                        <option value="asc">Asending</option>
                        <option value="desc">Desending</option>
                    </select>
                </div>
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