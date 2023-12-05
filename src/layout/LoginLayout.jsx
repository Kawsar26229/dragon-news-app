import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/shared/Footer/components/NavigationBar/NavigationBar";

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;