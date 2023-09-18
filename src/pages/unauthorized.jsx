import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <h1>Unathorized</h1>
      <p>401</p>
      <Link to="/login">Please Login First ....</Link>
    </div>
  );
};

export default Unauthorized;
