/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../../shared/SectionTitle";
import { useSelector } from "react-redux";


const SingleUser = () => {

    const navigator = useNavigate();

    const user = useSelector((state) => state?.singleUser?.user);
    const handleBack = () => {
        navigator(-1);
    }



    return (
        <main className="container mx-auto p-2">

            <SectionTitle subHeading="------ Know More! ------" heading="User Details"></SectionTitle>

            <div className="flex justify-end">
                <button
                    className="btn-primary"
                    onClick={handleBack}
                >
                    Back
                </button>
            </div>


            <section className="my-4 p-2">

                <div className="">
                    <img
                        src={user?.image ? user?.image : "https://i.ibb.co/5nPD3Qg/user.jpg"}
                        alt="user image"
                        className="h-60 w-60 rounded-full mx-auto"
                    />
                </div>

                <div className="">

                </div>

            </section>

        </main>
    );
};

export default SingleUser;