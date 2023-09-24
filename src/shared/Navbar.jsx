import { useContext, useState } from "react";
import { navData } from "../content/navData";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const [open, setOpen] = useState(true);

    const { user, logOut } = useContext(AuthContext);
    
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Successfully Loged out!',
                    'Success!',
                    'success'
                )
            })
            .catch(er => console.log(er))
    }

    return (
        <nav className='sticky top-0 bg-slate-900 text-white p-4 z-20'>

            <div className="container mx-auto flex justify-between">
                <div className='flex gap-1 items-center md:w-1/2'>

                    <div onClick={() => setOpen(!open)} className="md:hidden">

                        <span>
                            {open ? <button className="text-xl">{"✕"}</button> : <button className="text-xl">{"☰"}</button>}
                        </span>

                    </div>

                    <h2 className='text-2xl text-violet-500 font-bold'>Wesoftin</h2>

                </div>

                <ul className={`bg-slate-900 w-full md:w-1/2 p-1 text-white md:flex md:justify-around
 absolute md:static left-0 ${open ? 'top-14' : '-top-96'}`}>

                    {
                        navData.map((item, indx) => <li
                            key={indx} className='scale-95 hover:scale-100 mb-1 duration-500 transition-all ease-in-out font-semibold'>
                            <ActiveLink to={item.path}>{item.title}</ActiveLink>
                        </li>)
                    }
                    {
                        user
                            ?
                            <li onClick={handleLogout} className="scale-95 hover:scale-100 mb-1 duration-500 transition-all ease-in-out font-semibold px-2 py-1 bg-yellow-500 text-white">
                                <button>Logout</button>
                            </li>
                            :
                            <li
                                className='scale-95 hover:scale-100 mb-1 duration-500 transition-all ease-in-out font-semibold'>
                                <ActiveLink to="/signin">SignIn</ActiveLink>
                            </li>
                    }




                </ul>
            </div>

        </nav>
    );
};

export default Navbar;