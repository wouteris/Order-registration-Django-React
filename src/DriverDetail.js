import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "./images/user.jpg";
import { DataGrid } from '@mui/x-data-grid';


function DriverDetail  (props) {
  const [driver, setDriver] = useState(props.currentDriver)
  const history = useNavigate();
 
  


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
            Back to Location List
            
          </button>
        
      </div>
    </div>
  );
};

export default DriverDetail;
