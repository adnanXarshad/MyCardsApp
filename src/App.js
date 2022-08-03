import "./App.css";
import React from "react";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import "./components/Home/index";
import Home from "./components/Home/index";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-out" element={<SignOut />} />
    </Routes>
    </>
  );
}

export default App;
