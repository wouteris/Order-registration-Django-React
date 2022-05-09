import React from "react";
import { Link } from "react-router-dom";
import user from "./images/user.jpg";

const LocationDetail = (props) => {
  const { locationCode, locationDescription } = props.location.state.location;
  return (
    <div className="main">
      <div className="ui card centered">
      <div className="image">
      <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{locationCode}</div>
          <div className="description">{locationDescription}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Location List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LocationDetail;
