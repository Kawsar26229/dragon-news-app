import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/shared/Login/Login/Login";
import Register from "../pages/shared/Login/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category'> </Navigate>
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
        element: <Main></Main>
    }
])