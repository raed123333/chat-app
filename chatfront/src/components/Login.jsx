// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Login = ({ openSignup }) => {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const handlSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  return (
    <div>
      <form onSubmit={handlSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            User Name:
          </label>
          <input
            className="w-full px-3 py-2 border"
            type="text"
            placeholder="enter UserName"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full px-3 py-2 border"
            type="Password"
            placeholder="Enter password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-red-800">
            Forget Password?
          </a>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 hover:scale-105"
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Dont Have an Account?</span>
        <button className="text-blue-800" onClick={openSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
