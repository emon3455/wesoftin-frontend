import { useState } from "react";
import { navData } from "../content/navData";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState(true);

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
                        key={indx} className='scale-95 hover:scale-100 bg-violet-400 px-2 mb-1 duration-500 transition-all ease-in-out font-semibold'>
                            <Link to={item.path}>{item.title}</Link>
                        </li>)
                    }

                </ul>
            </div>

        </nav>
    );
};

export default Navbar;