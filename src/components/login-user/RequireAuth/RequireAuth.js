import React from 'react'
import auth from "../../../firebase.init"
import {useLocation,Navigate} from "react-router-dom"
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = ({ children }) => {
    // let auth = useAuth();
    let location = useLocation();

      // firebase
  const [user, loading, error] = useAuthState(auth);
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }


  export default RequireAuth