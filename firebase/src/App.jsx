import React from "react";
import { Route, Routes } from "react-router";
import SignIn from "./component/SignIn";
import Home from "./Component/Home";
import SignUp from "./Component/SignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
