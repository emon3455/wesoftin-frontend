/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import SectionTitle from "../../shared/SectionTitle";
import CSkeleton from "../../components/customComponent/CSkeleton";
import { useGetAllUsersQuery } from "../../redux/features/users/user-api-slice";

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
                isError && <h2 className='text-center text-red-500 font-bold text-2xl'>{error?.error}</h2>
            }
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-2">
                {
                    users ?
                        users.map((user, index) => <div key={index} className="shadow-md p-4 rounded bg-white">
                            <div className="">
                                <img
                                    src={user?.image ? user?.image : "https://i.ibb.co/5nPD3Qg/user.jpg"}
                                    alt="user image"
                                    className="h-40 w-40 rounded mx-auto"
                                />
                            </div>
                            <div className="">
                                <h2 className="text-2xl font-semibold">{user?.name}</h2>
                                <p>
                                    <span className="font-semibold">EMAIL: </span> {user?.email ? user?.email : "N/A"}
                                </p>
                                <p>
                                    <span className="font-semibold">AGE: </span> {user?.age ? user?.age : "N/A"}
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <Link to={`/users/${user._id}`}>
                                    <button className="font-semibold text-white bg-violet-600 px-2 py-1">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>)
                        :
                        !isLoading &&
                        <h2 className='text-red-500  font-bold text-2xl text-center md:col-span-2 xl:col-span-3'>
                            No Users Data Found!!!
                        </h2>
                }
            </section>
        </main>
    );
};

export default Users;