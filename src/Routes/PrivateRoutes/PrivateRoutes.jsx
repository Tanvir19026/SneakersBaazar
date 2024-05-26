/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";


import useAuth from "../../Hooks/UseAuth";
import LoadingSpinner from './../../Pages/LoadingSpinner';


const PrivateRoutes = ({children}) => {
  
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />;
      }
    
      if (user) {
        return children;
      }
    
      return <Navigate to={"/login"} state={{from:location}} replace />;
 
};

export default PrivateRoutes;