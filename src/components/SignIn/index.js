import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
// import { Redirect } from 'react-router-dom'
// import { paths } from '../../routes/routes'

const Index = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();
if (isAuthenticated) {
    navigate("/");
    return;
    }
  const handleData= (e)=>{
    //  signin({ username: "adnan", password: "adnan" });
    //  if(username!=="adnan" && password!=="adnan"){
    //   alert("Enter Correct Data");
    // }
  }
  return (
    <>
      <input type={"text"} id={"username"} name={"username"} placeholder={"username"} />
      <input type={"password"} id={"password"} name={"password"} placeholder={"Password"} />
      <input type={"submit"} placeholder={"Submit"} onClick={handleData} />
    </>
  );
};

export default Index;
