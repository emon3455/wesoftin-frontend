/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../../shared/SectionTitle";


const Services = () => {
    return (
        <main className="container mx-auto p-2">
            <SectionTitle subHeading="------ Let's Do It! ------" heading="Services You Can get"></SectionTitle>


            <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">

                <div className="bg-white rounded-lg p-4 shadow-xl shadow-cyan-500/50 space-y-2 my-auto border-2 border-gray-200">
                    <h2 className="text-xl font-bold text-black">Web Application Development</h2>
                    <p className="text-justify text-black">
                        We can develop custom web applications using the MERN stack to meet Our clients' specific requirements. This involves building scalable and interactive web applications that leverage the power of React.js on the frontend, Node.js on the server-side, and MongoDB as the database.
                    </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-xl shadow-orange-500/50 space-y-2 my-auto border-2 border-gray-200">
                    <h2 className="text-xl font-bold text-black">Web Application Development</h2>
                    <p className="text-justify text-black">
                        We can develop custom web applications using the MERN stack to meet Our clients' specific requirements. This involves building scalable and interactive web applications that leverage the power of React.js on the frontend, Node.js on the server-side, and MongoDB as the database.
                    </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-xl shadow-pink-500/50 space-y-2 my-auto lg:col-span-2 border-2 border-gray-200">
                    <h2 className="font-bold text-black">UI/UX Design</h2>
                    <p className="text-justify text-black">
                        User interface (UI) and user experience (UX) design play a crucial role in creating visually appealing and user-friendly websites. I can offer UI/UX design services, collaborating with clients to understand their target audience and design intuitive and visually appealing interfaces.
                    </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-xl shadow-cyan-500/50 space-y-2 my-auto border-2 border-gray-200">
                    <h2 className="text-xl font-bold text-black">Search Engine Optimization (SEO)</h2>
                    <p className="text-justify text-black">
                        In an era where online visibility can make or break a business, our SEO experts work tirelessly to boost your website's rankings and drive organic traffic. We employ industry best practices to optimize your website for search engines, ensuring that potential customers can easily find you online.
                    </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-xl shadow-orange-500/50 space-y-2 my-auto border-2 border-gray-200">
                    <h2 className="text-xl font-bold text-black">Digital Marketing</h2>
                    <p className="text-justify text-black">
                        Beyond SEO, we offer a range of digital marketing services including content marketing, social media management, pay-per-click advertising, and email marketing. Our holistic approach ensures your online presence is not only optimized for search engines but also engaging and impactful for your target audience.
                    </p>
                </div>

            </div>

        </main>
    );
};

export default Services;