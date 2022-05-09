import React from "react";
import { Link } from "react-router-dom";
import user from "./images/user.jpg";

const VehicleDetail = (props) => {
  const { vehicleCode, vehicleDescription } = props.location.state.vehicle;
  return (
    <div className="main">
      <div className="ui card centered">
      <div className="image">
      <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{vehicleCode}</div>
          <div className="description">{vehicleDescription}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Vehicle List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VehicleDetail;
