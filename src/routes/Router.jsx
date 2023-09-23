import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import SingleUser from "../pages/users/singleUser/SingleUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/users",
                element: <Users/>,
            },
            {
                path: "/users/:id",
                element: <SingleUser/>,
            },
        ]
    },

]);

export default router;