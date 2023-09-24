/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserData } from '../../redux/features/users/user-slice';

const User = ({ user }) => {

    const dispatch = useDispatch();

    return (
        <Link 
        to={`/users/${user._id}`} 
        >
            <div 
            className="shadow-md p-4 rounded bg-white" 
            onClick={()=>dispatch(setUserData(user))
            }
            >
                <div className="">
                    <img
                        src={user?.image ? user?.image : "https://i.ibb.co/5nPD3Qg/user.jpg"}
                        alt="user image"
                        className="h-40 w-40 rounded mx-auto"
                    />
                </div>
                <div className="">
                    <h2 className="text-2xl font-semibold">{user?.name}</h2>
                    <p>
                        <span className="font-semibold">EMAIL: </span> {user?.email ? user?.email : "N/A"}
                    </p>
                    <p>
                        <span className="font-semibold">AGE: </span> {user?.age ? user?.age : "N/A"}
                    </p>
                </div>
            </div>
        </Link>

    );
};

export default User;