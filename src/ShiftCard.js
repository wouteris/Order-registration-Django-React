import React from "react";
import { Link } from "react-router-dom";


const ShiftCard = (props) => {
  const { id, shiftCode, shiftDescription } = props.shift;
  return (
    <div className="item">
      
      <div className="content">
        <Link
          to={{ pathname: `/shift/${id}`, state: { shift: props.shift } }}
        >
          <div className="header">{shiftCode}</div>
          <div>{shiftDescription}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)} 
      ></i>
      <Link to={{ pathname: `/edit`, state: { shift: props.shift } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ShiftCard;
