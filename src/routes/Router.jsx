import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Users from "../pages/users/Users";

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
        ]
    },

]);

export default router;