// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Register = ({ openLogin }) => {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const handlSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  return (
    <div>
      <form onSubmit={handlSubmit}>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
        <div className="mb-4">
          <label className="block text-gray-700"> Upload Image</label>
          <input
            type="file"
            className="border p-2 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-500 file:text-while
            hover:file:bg-blue-700"
          />
        </div>
        <div className="mb-4">
          <button type="submit" className="w-full bg-blue-600 text-white py-2">
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Already have an Account?</span>
        <button className="text-blue-800" onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
