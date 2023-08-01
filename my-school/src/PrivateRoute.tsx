import React, { useContext } from 'react';
import { context } from './Context/Context';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }: { children: any }) => {
  let { authorized } = useContext(context);

  // Check for the user token and user data in cookies
  let userDataCookie = Cookies.get('SchooleManagementUserData') || '{"name":"Sachin"}';
  let token = Cookies.get('SchooleManagementUserToken');

  // If the user data is not equal to the default value and token is present, allow access to private route
  if (userDataCookie && userDataCookie !== '{"name":"Sachin"}' && token) {
    return children;
  } else {
    // Redirect to login page if not authorized
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
