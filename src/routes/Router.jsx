import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import SingleUser from "../pages/users/singleUser/SingleUser";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Contact from "../pages/contact/Contact";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/users",
                element: <Users/>,
            },
            {
                path: "/users/:id",
                element: <SingleUser/>,
            },
            {
                path: "/services",
                element: <Services/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/signin",
                element: <SignIn/>,
            },
            {
                path: "/signup",
                element: <SignUp/>,
            },
        ]
    },

]);

export default router;