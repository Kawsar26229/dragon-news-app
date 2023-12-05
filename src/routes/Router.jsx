import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/shared/Login/Login/Login";
import Register from "../pages/shared/Login/Register/Register";
import Category from "../pages/shared/Footer/components/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import SingleNews from "../pages/shared/SingleNews/SingleNews";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'> </Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: async ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:id',
                element: <SingleNews></SingleNews>,
                loader: async ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])