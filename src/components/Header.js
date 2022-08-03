import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button onClick={()=>{navigate("/")}}>Home</button>
      <button onClick={()=>{navigate("/cart")}}>Cart</button>
      <button onClick={()=>{navigate("/sign-in")}}>SignIn</button>
      <button onClick={()=>{navigate("/sign-out")}}>SignUp</button>
    </div>
  );
};

export default Header;
