import SectionTitle from "../../shared/SectionTitle";

const About = () => {
    return (
        <main>
            <SectionTitle subHeading="------ Know More! ------" heading="About US"></SectionTitle>
            <section className='w-full container mx-auto p-2 grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                <div className="">
                    <h2 className='text-xl lg:text-3xl font-bold my-2'>Your Satisfaction Our Success</h2>
                    <p className='text-sm'>
                        Welcome to Wesoftin, a leading technology company at the forefront of innovation and digital transformation. Established with a vision to empower businesses with cutting-edge IT solutions, we specialize in providing a comprehensive suite of services primarily focused on web application development, SEO, and various other technology services.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    <div className="">
                        <img alt="company images" src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className='mx-auto rounded-lg scale-90 hover:scale-100 transition-all duration-300 ease-in shadow-lg shadow-sky-400/50' />
                    </div>

                    <div className="">
                        <img alt="company images" src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className='mx-auto rounded-lg scale-90 hover:scale-100 transition-all duration-300 ease-in shadow-lg shadow-pink-500/50' />
                    </div>

                    <div className="">
                        <img alt="company images" src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className='mx-auto rounded-lg scale-90 hover:scale-100 transition-all duration-300 ease-in shadow-lg shadow-pink-500/50' />
                    </div>

                    <div className="">
                        <img alt="company images" src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className='mx-auto rounded-lg scale-90 hover:scale-100 transition-all duration-300 ease-in shadow-lg shadow-sky-400/50' />
                    </div>

                </div>
            </section>
        </main>
    );
};

export default About;