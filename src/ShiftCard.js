import React from "react";
import { Link } from "react-router-dom";


function ShiftCard (props)  {

  
  
  return (
    
    <div className="item">
      
      <div className="content">
        
        <Link
          to={{ pathname: `/shift/${props.shift.id}` } } onClick = {() =>props.editRow(props.shift)}>
          
          <div className="header">{props.shift.shiftCode}</div>
          <div>{props.shift.shiftDescription}</div>
          <div>{props.shift.id}</div>
          
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(props.shift.id)} 
      ></i>
      <Link to={{ pathname: `/shift/edit` }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
          onClick = {() =>props.editRow(props.shift)}
        ></i>
      </Link>
    </div>
  );
};

export default ShiftCard;
