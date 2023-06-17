import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => { //children represent cart page
    const token = JSON.parse(sessionStorage.getItem("token"));

  return token ? children : <Navigate to={'/login'}/>
}

export default ProtectedRoutes