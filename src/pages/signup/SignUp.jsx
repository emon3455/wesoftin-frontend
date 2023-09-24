/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImage from "../../../public/reg.jpg"
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {

    const [hide, setHide] = useState(true);

    const { createUser, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(res => {
                const createdUser = res.user;
                if (createdUser) {
                    updateProfile(createdUser, {
                        displayName: data.name, photoURL: data.photo
                    }).then(() => {
                        Swal.fire(
                            'User created Successfully!',
                            'Success!',
                            'success'
                        )
                        reset();
                        logOut()
                            .then(() => {
                                navigate("/signin", { replace: true });
                            })
                            .catch(er => console.log(er))
                    }).catch((error) => {
                        Swal.fire(
                            'User created But Profile Not Updated Successfully!',
                            'Success!',
                            'warning'
                        )
                    });

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
        <div>
            <div className='my-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 p-4">
                    <div className="p-6 w-full max-w-2xl shadow-lg bg-base-100 order-2 md:order-1 border border-gray-200 space-y-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <h2 className="lg:text-2xl font-bold text-center text-violet-600 my-4">Sign Up</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="w-full" />
                                    {errors.name && <span className="text-red-600 ">name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="name" {...register("photo", { required: true })} placeholder="photo" className="w-full" />
                                    {errors.photo && <span className="text-red-600 ">Photo URL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="w-full" />
                                    {errors.email && <span className="text-red-600 ">email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={`${hide ? "password" : "text"}`} {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} placeholder="password" className="w-full" />
                                        <span onClick={() => setHide(!hide)} className="absolute right-0 p-3">
                                            {hide ? <FaEye /> : <FaEyeSlash />}{" "}
                                        </span>
                                    </div>
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>
                            </div>

                            <input type="submit" value="Sign Up" className="btn-primary mt-2 text-white font-semibold" />
                        </form>
                        <p className="text-sm text-center text-gray-600 font-semibold ">
                            Already have an Account? <Link className="text-violet-600" to="/signin">Login</Link>
                        </p>

                    </div>
                    <div className="max-w-lg order-1 md:order-2">
                        <img className="w-full" src={registerImage} alt="login image" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SignUp;