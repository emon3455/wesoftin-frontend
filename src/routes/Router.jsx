import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../components/home/Home";
import Users from "../components/users/Users";
import Main from "../layout/Main";

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