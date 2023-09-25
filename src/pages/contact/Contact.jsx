import SectionTitle from "../../shared/SectionTitle";
import Lottie from "lottie-react";
import contact from "../../../public/data.json";

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <SectionTitle subHeading="------ Let's Talk! ------" heading="Contact Us"></SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 my-8 gap-5 p-4 lg:p-0 ">
                <div className="w-full  max-w-lg mx-auto shadow-lg shadow-sky-400/50 rounded bg-base-100 order-2 lg:order-1 border border-gray-200">
                    <form onSubmit={sendEmail} className="space-y-2 p-4">
                        <h2 className="lg:text-2xl font-bold text-center text-violet-600 my-4">Send Message</h2>
                        <div className="form-control">
                            <label className="label">
                                <span>Name</span>
                            </label>
                            <input type="text" name="user_name" required placeholder="Name" className="input input-bordered input-info" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span>Email</span>
                            </label>
                            <input type="email" name="user_email" required placeholder="Email" className="input input-bordered input-secondary" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span>Message</span>
                            </label>
                            <textarea required name="message" placeholder="Message" className="rounded w-full h-28 p-2 border-2 border-gray-400" />
                        </div>

                        <input type="submit" value="Send" className="btn-primary mt-2 text-white font-semibold" />
                    </form>
                </div>

                <div className="w-full lg:w-4/5 mx-auto order-1 lg:order-2" >
                    <div className='w-full mx-auto'>
                        <Lottie className='w-full h-full' animationData={contact} loop={true}></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;