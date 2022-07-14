import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import user from "./images/user.jpg";


function VehicleDetail  (props) {
  const [vehicle, setVehicle] = useState(props.currentVehicle)
  const history = useNavigate();
 
  
  useEffect(() => {

  setVehicle(props.currentVehicle)
  
  } , [ props ]); 


 
  return (
    <div className="main">
      <div className="ui card centered">
      <div className="image">
      <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">vehiclename:  {vehicle.vehicleDescription}</div>
          <div className="description">vehiclecode: {vehicle.vehicleCode} </div>
        </div>
      </div>
      <div className="center-div">
        
          <button onClick = {() =>history('/vehicle')} className="ui button blue center">
            Back to Location List
            
          </button>
        
      </div>
    </div>
  );
};

export default VehicleDetail;
