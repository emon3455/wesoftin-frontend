/* eslint-disable react/prop-types */
const SingleInfo = ({ data, title }) => {
    return (
      <>
        <div
          className={`rounded border-2 border-dashed border-gray-200 dark:border-gray-600 p-1 text-center`}
        >
          <p className="text-base font-medium">
            {data ? data : "N/A"}
          </p>
          <h2 className="text-gray-500 text-xs">{title}</h2>
        </div>
      </>
    );
};

export default SingleInfo;