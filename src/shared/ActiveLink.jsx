/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';


const ActiveLink = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) => isActive ? "px-2  py-1 bg-violet-600 text-white" : ""}
        >
            {children}
        </NavLink>
    );
};


export default ActiveLink;