import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading) {
        return <Spinner className="mx-auto mt-5" animation="grow" />
    }
    if(user) {
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRouter;