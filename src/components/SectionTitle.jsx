/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="my-8">
            <p className="text-red-500 text-center mb-2 font-bold">{subHeading}</p>
            <h2 className="text-xl lg:text-3xl font-extrabold text-center border-y-2 lg:w-4/12 mx-auto py-2">
                {heading}
            </h2>
        </div>
    );
};

export default SectionTitle;