/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../../public/log.jpg"
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {

    const [hide, setHide] = useState(true);
    const { signInUser } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const onSubmit = data => {

        signInUser(data.email, data.password)
            .then(res => {
                const logedUser = res.user;
                if (logedUser) {
                    Swal.fire(
                        'Successfully Loged In!',
                        'Success!',
                        'success'
                    )
                    reset();
                    navigate(from, { replace: true });
                }
                else {
                    return;
                }
            })
            .catch(er => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            })
    };

    return (
        <div className='my-5' >

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 p-4">
                <div className="w-full max-w-lg shadow-lg bg-base-100 order-2 md:order-1 p-6 border border-gray-200 space-y-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">

                        <h2 className="lg:text-2xl font-bold text-center text-violet-600 my-4">Please Sign In</h2>

                        <div className="form-control">
                            <label className="label">
                                <span>Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="w-full" />
                            {errors.email && <span className="text-red-600 ">email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span>Password</span>
                            </label>
                            <div className="relative">
                                <input type={`${hide ? "password" : "text"}`} {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password"className="w-full" />
                                <span onClick={() => setHide(!hide)} className="absolute right-0 p-3">
                                    {hide ? <FaEye /> : <FaEyeSlash />}{" "}
                                </span>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>

                        <input type="submit" value="Login" className="btn-primary mt-2 text-white font-semibold" />

                    </form>

                    <p className="text-sm text-center text-gray-600 font-semibold ">
                        Don't have an Account? <Link className="text-violet-600" to="/signup">Create an account</Link>
                    </p>

                </div>
                <div className="max-w-lg order-1 md:order-2 ">
                    <img className="w-full" src={loginImage} alt="login image" />
                </div>
            </div>

        </div>
    );
};


export default SignIn;