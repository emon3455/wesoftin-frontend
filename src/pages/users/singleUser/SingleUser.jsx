/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../../shared/SectionTitle";
import { useSelector } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import SingleInfo from "../../../components/users/SingleInfo";

const SingleUser = () => {

    const customStyle = "rounded border-2 border-dashed border-gray-200 dark:border-gray-600 p-1";

    const navigator = useNavigate();

    const user = useSelector((state) => state?.singleUser?.user);
    const handleBack = () => {
        navigator(-1);
    }



    return (
        <main className="container mx-auto p-2">

            <SectionTitle subHeading="------ Know More! ------" heading="User Details"></SectionTitle>

            <div className="flex justify-end mb-2">
                <button
                    className="btn-primary"
                    onClick={handleBack}
                >
                    <BsArrowLeft className="font-extrabold" />
                </button>
            </div>


            <section className="p-4 flex flex-col md:flex-row justify-center items-center gap-5">

                <div className="w-full md:w-1/4 rounded">
                    <div className="">
                        <img
                            src={
                                user?.image
                                    ? user?.image
                                    : "https://i.ibb.co/5nPD3Qg/user.jpg"
                            }
                            alt="teacher image"
                            className="w-40 h-40 mx-auto rounded border-2 border-gray-200 object-cover"
                        />
                    </div>

                </div>

                <div className="w-full md:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mb-5">

                        <SingleInfo data={`${user?.name}`} title={"NAME"} />

                        <SingleInfo data={`${user?.gender}`} title={"GENDER"} />

                        <SingleInfo data={`${user?.age}`} title={"AGE"} />

                        <SingleInfo data={`${user?.nationality}`} title={"NATIONALITY"} />

                        <SingleInfo data={`${user?.nid}`} title={"NID NUMBER"} />

                        <SingleInfo data={`${user?.email}`} title={"EMAIL"} />

                    </div>
                </div>
            </section>

            <section className="my-2 space-y-2">

                <div className={`${customStyle}`}>
                    <p className="text-base font-medium">
                        {user?.skills ? user?.skills?.map((skill, indx) => (
                            <span key={indx}> {skill}, </span>
                        ))
                            :
                            "N/A"
                        }
                    </p>
                    <h2 className="text-gray-500 text-xs">SKILLS: </h2>
                </div>

                <div className={`${customStyle}`}>
                    <span className="text-base font-medium">
                        {user?.address ? user?.address : "N/A"}
                    </span>{" "}
                    <br />
                    <span className="text-gray-500 text-xs">ADDRESS:</span>
                </div>

                <div className={`${customStyle}`}>
                    {
                        user?.educationalQualifications
                            ?
                            <>
                                <span className="text-base font-medium">
                                    {user?.educationalQualifications?.degree ? user?.educationalQualifications?.degree : "N/A"}
                                </span>{" "}
                                <br />
                                <span className="text-base font-medium">
                                    {user?.educationalQualifications?.university ? user?.educationalQualifications?.university : "N/A"}
                                </span>{" "}
                                <br />
                                <span className="text-base font-medium">
                                    {user?.educationalQualifications?.session ? user?.educationalQualifications?.session : "N/A"}
                                </span>{" "}
                                <br />
                            </>
                            :
                            "N/A"
                    }
                    <span className="text-gray-500 text-xs">EDUCATIONAL QUALIFICATIONS:</span>
                </div>

            </section>

        </main>
    );
};

export default SingleUser;