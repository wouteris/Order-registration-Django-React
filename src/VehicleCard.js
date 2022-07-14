import React from "react";
import { Link } from "react-router-dom";


function VehicleCard (props)  {

  
  
  return (
    
    <div className="item">
      
      <div className="content">
        
        <Link
          to={{ pathname: `/vehicle/${props.vehicle.id}` } } onClick = {() =>props.editRow(props.vehicle)}>
          
          <div className="header">{props.vehicle.vehicleCode}</div>
          <div>{props.vehicle.vehicleDescription}</div>
          <div>{props.vehicle.id}</div>
          
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(props.vehicle.id)} 
      ></i>
      <Link to={{ pathname: `/vehicle/edit` }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
          onClick = {() =>props.editRow(props.vehicle)}
        ></i>
      </Link>
    </div>
  );
};

export default VehicleCard;
