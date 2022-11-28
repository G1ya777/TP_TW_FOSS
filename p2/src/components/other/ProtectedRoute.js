import { Navigate } from "react-router-dom"
import { logButton } from "../header";

const ProtectedRoute = ({ children }) => {


    if (logButton === 'login'){

        alert("not authorized, login first")
        return <Navigate to={'/login'} />;
    }
    
    return children;
    


    
}

export default ProtectedRoute;