import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../utils/Auth';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(async (res) => {
        if (res.status === 400) return alert('login failed');
        const { token } = await res.json();
        auth.storeAuthCredential(token);
        return navigate('/');
      })
      .catch((e) => {
        alert('Failed to login');
        console.error(e);
      });
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col shadow-md p-5 rounded-lg"
      >
        <h1 className="text-3xl font-bold text-indigo-500 mb-5">Login</h1>
        <div>
          <InputForm
            title="username"
            name="username"
            type="text"
            placeholder="username"
          />
          <InputForm
            title="password"
            name="password"
            type="password"
            placeholder="******"
          />
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
