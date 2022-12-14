import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddASection from "../../Pages/Home/AddASecction/AddASection";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '/AddASection',
                element: <AddASection></AddASection>
            }
        ]
    }
])

export default router;