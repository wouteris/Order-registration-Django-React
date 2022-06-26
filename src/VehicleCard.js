import React from "react";
import { Link } from "react-router-dom";


const VehicleCard = (props) => {
  const { id, vehicleCode, vehicleDescription } = props.vehicle;
  return (
    <div className="item">
      
      <div className="content">
        <Link
          to={{ pathname: `/vehicle/${id}`, state: { vehicle: props.vehicle } }}
        >
          <div className="header">{vehicleCode}</div>
          <div>{vehicleDescription}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)} 
      ></i>
      <Link to={{ pathname: `edit`, state: { vehicle: props.vehicle } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default VehicleCard;
