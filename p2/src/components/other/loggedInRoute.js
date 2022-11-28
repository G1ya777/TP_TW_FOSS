import { Navigate } from "react-router-dom";
import React from "react";
import { logButton } from "../header";


const LoggedInRoute = ({ children }) => {

    if (logButton !== 'login') {

        return <Navigate to={'/home'} />;
    }
    return children;

}
export default LoggedInRoute; 