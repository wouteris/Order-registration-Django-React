import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import user from "./images/user.jpg";


function DriverDetail  (props) {
  const [driver, setDriver] = useState(props.currentDriver)
  const history = useNavigate();
 console.log(driver)
  
  useEffect(() => {

  setDriver(props.currentDriver)
  
  } , [ props ]); 


 
  return (
    <div className="main">
      <div className="ui card centered">
      <div className="image">
      <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Drivername:  {driver.driverDescription}</div>
          <div className="description">Drivercode: {driver.driverCode} </div>
        </div>
      </div>
      <div className="center-div">
        
          <button onClick = {() =>history('/Driver')} className="ui button blue center">
            Back to Driver List
            
          </button>
        
      </div>
    </div>
  );
};

export default DriverDetail;
