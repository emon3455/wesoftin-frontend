
import errors from "../../../public/error-img.jpg"
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <div className="h-screen flex flex-col gap-0 justify-center items-center ">
            <div className='h-2/3'>
                <img className='h-full' src={errors} />
            </div>
            <p className='text-2xl md:text-4xl font-bold mb-4 text-center'>Something Went Wrong!!</p>
            <Link to='/' className='btn-primary'>
                Please Go Back To Homepage
            </Link>
        </div>
    );
};

export default Error;