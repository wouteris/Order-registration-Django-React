import React from "react";
import { Link } from "react-router-dom";



function LocationCard (props)  {

  
  
  return (
    
    <div className="item">
      
      <div className="content">
        
        <Link
          to={{ pathname: `/location/${props.location.id}` } } onClick = {() =>props.editRow(props.location)}>
          
          <div className="header">{props.location.locationCode}</div>
          <div>{props.location.locationDescription}</div>
          <div>{props.location.id}</div>
          
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(props.location.id)} 
      ></i>
      <Link to={{ pathname: `/location/edit` }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
          onClick = {() =>props.editRow(props.location)}
        ></i>
      </Link>
    </div>
  );
};

export default LocationCard;
