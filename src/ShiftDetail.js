import React from "react";
import { Link } from "react-router-dom";
import user from "./images/user.jpg";

const ShiftDetail = (props) => {
  const { shiftCode, shiftDescription } = props.location.state.shift;
  return (
    <div className="main">
      <div className="ui card centered">
      <div className="image">
      <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{shiftCode}</div>
          <div className="description">{shiftDescription}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Shift List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShiftDetail;
