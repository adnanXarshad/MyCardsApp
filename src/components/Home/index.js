import React from "react";
import { pkg } from "../Data";

const index = () => {
  const handleAuthentication=()=>{
    console.log("GOOD");
  }
  return (
    <div className="cards">
      {pkg.map((element) => {
        return (
          <div className="cardClass">
            <h2>{element.name}</h2>
            <h3>{element.data}GB data</h3>
            <h1>{element.mints} Mints</h1>
            <h2>{element.sms} SMS</h2>
            <h1>Rs. {element.rs}</h1>
            <div>
              <button onClick={()=>{handleAuthentication()}}>ADD TO CART</button>
              <img src={element.image} alt="IMAGES" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default index;
