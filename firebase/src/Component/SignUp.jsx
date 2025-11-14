import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../config/firebase";

export default function SignUp() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  function register(e) {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((res) => {
        console.log(res);
        alert("Signup successful");
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });

    setUserData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={register}>
          {/* FULL NAME */}
          <div className="mb-4">
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              value={userData.fullName}
              onChange={(e) =>
                setUserData({ ...userData, fullName: e.target.value })
              }
              className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter email"
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Create password"
              required
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mb-4">
            <label className="text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              value={userData.confirmPassword}
              onChange={(e) =>
                setUserData({ ...userData, confirmPassword: e.target.value })
              }
              className="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Confirm password"
              required
            />
          </div>

          {/* SIGN UP BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* EXTRA LINKS */}
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?
          <a href="/signin" className="text-blue-600 hover:underline ml-1">
            Login
          </a>
        </div>

      </div>
    </div>
  );
}
