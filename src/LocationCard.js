import React from "react";
import { Outlet, Link } from "react-router-dom";


const LocationCard = (props) => {
  const { id, locationCode, locationDescription } = props.location;
  return (
    <div className="item">
      
      <div className="content">
        <Link
          to={{ pathname: `/location/${id}`, state: { location: props.location } }}
        >
          <div className="header">{locationCode}</div>
          <div>{locationDescription}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)} 
      ></i>
      <Link to={{ pathname: `/edit`, state: { location: props.location } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
      <Outlet />
    </div>
  );
};

export default LocationCard;
