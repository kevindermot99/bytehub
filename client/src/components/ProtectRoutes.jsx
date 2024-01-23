import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
    const userToken = localStorage.getItem("token") 
    return userToken;
}

const ProtectRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login"/>
}

export default ProtectRoutes