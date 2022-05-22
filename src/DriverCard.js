import React from "react";
import { Link } from "react-router-dom";


const DriverCard = (props) => {
  const { id, driverCode, driverDescription } = props.driver;
  return (
    <div className="item">
      
      <div className="content">
        <Link
          to={{ pathname: `/driver/${id}`, state: { driver: props.driver } }}
        >
          <div className="header">{driverCode}</div>
          <div>{driverDescription}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)} 
      ></i>
      <Link to={{ pathname: `/edit`, state: { driver: props.driver } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default DriverCard;
