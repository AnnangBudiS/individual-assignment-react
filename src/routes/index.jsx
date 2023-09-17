import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home-page';
import ErrorPage from '../pages/error-page';
import LoginPage from '../pages/login-page';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routers;
