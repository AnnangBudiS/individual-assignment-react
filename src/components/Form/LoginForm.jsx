import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <form className="flex flex-col shadow-md p-5 rounded-lg">
        <h1 className="text-3xl font-bold text-indigo-500 mb-5">Login</h1>
        <div>
          <InputForm title="username" type="text" placeholder="username" />
          <InputForm title="password" type="password" placeholder="******" />
        </div>
        <div>
          <button className="bg-indigo-500 w-full p-3 rounded-lg mt-4 text-slate-50 font-semibold hover:bg-indigo-300 hover:shadow-lg">
            Login
          </button>
        </div>
        <div>
          <Link>
            dont have account? <span className="text-sky-400">register</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

const InputForm = ({ title, type, placeholder, name }) => {
  return (
    <div className="my-4">
      <label className="font-semibold text-gray-500">{title}</label>
      <input
        className="border h-10 border-indigo-600 w-full rounded-lg pl-3"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LoginForm;
