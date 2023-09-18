import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home-page';
import ErrorPage from '../pages/error-page';
import LoginPage from '../pages/login-page';
import ProductDetailPage from '../pages/product-detail-page';
import PrivateRoute from './private-route';
import ProtectedRoute from './protected-route';

const Routers = () => {
  return (
    <Routes>
      {/* private */}
      <Route path="/" element={<PrivateRoute />}>
        <Route index element={<HomePage />} />
        <Route path="/detail/:id" element={<ProductDetailPage />} />
      </Route>
      {/* protected */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Routers;
