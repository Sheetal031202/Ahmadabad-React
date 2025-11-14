import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function SignIn() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((res) => {
        console.log(res);
        alert("Login successful");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });

    setUserData({ email: "", password: "" });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin}>
          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="mt-2 w-full px-4 py-3 border rounded-xl 
              focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
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
              className="mt-2 w-full px-4 py-3 border rounded-xl 
              focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter password"
              required
            />
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl 
            font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* EXTRA LINKS */}
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600">Forgot Password?</a>
          <a href="/signup" className="hover:text-blue-600">Create Account</a>
        </div>

      </div>
    </div>
  );
}
