import React from 'react';
import auth from '../utils/Auth';
import Unauthorized from '../pages/unauthorized';
import { Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  if (auth.isAuthenticated()) return <Outlet />;

  return <Unauthorized />;
}
