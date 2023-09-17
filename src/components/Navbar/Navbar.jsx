import React from 'react';
import { Link } from 'react-router-dom';

import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="fixed w-full z-[1] bg-white shadow-md p-4">
      <nav className="flex justify-between items-center lg:container lg:mx-auto ">
        <div>
          <Link to="/" className="text-xl font-bold">
            OhMy
          </Link>
        </div>
        <div className="w-full mx-5 lg:mx-52">
          <input
            className=" pl-4 h-8 rounded-full border lg:w-full"
            type="text"
            placeholder="search products"
          />
        </div>
        <div className="flex items-center space-x-4">
          <span className="p-2 bg-slate-400 rounded-full cursor-pointer hover:bg-slate-200">
            <BsCart3 className="text-slate-50 text-xl" />
          </span>
          <Link
            className="bg-slate-900 px-4 p-2 text-slate-50 font-semibold rounded-lg hover:bg-gray-700"
            to="/login"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
