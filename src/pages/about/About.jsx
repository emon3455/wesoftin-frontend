import SectionTitle from "../../shared/SectionTitle";

const About = () => {
    return (
        <main>
            <SectionTitle subHeading="------ Know More! ------" heading="About US"></SectionTitle>
            <section className='w-full md:w-4/5 mx-auto p-2 grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                <div className="">
                    <h2 className='text-xl lg:text-3xl font-bold my-2'>We Focus On Your Satisfaction</h2>
                    <p className='text-sm'>
                        Welcome to Wesoftin, a leading technology company at the forefront of innovation and digital transformation. Established with a vision to empower businesses with cutting-edge IT solutions, we specialize in providing a comprehensive suite of services primarily focused on web application development, SEO, and various other technology services.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:mt-5">
                    <div className="-mt-5">
                        <img alt="company images" src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className='mx-auto rounded-lg scale-90 hover:scale-100 transition-all duration-300 ease-in shadow-lg shadow-sky-400/50' />
                    </div>
                    <div className="mt-10">
                        <img alt="company images" src="https://images.unsplash.com/photo-1617609277590-ec2d145ca13b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" className='mx-auto rounded-lg scale-90 hover:scale-100 transition-all duration-300 ease-in shadow-lg shadow-pink-500/50' />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;