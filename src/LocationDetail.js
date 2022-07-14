import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import user from "./images/user.jpg";


function LocationDetail  (props) {
  const [location, setLocation] = useState(props.currentLocation)
  const history = useNavigate();
 
  
  useEffect(() => {

  setLocation(props.currentLocation)
  
  } , [ props ]); 


 
  return (
    <div className="main">
      <div className="ui card centered">
      <div className="image">
      <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">locationname:  {location.locationDescription}</div>
          <div className="description">locationcode: {location.locationCode} </div>
        </div>
      </div>
      <div className="center-div">
        
          <button onClick = {() =>history('/location')} className="ui button blue center">
            Back to Location List
            
          </button>
        
      </div>
    </div>
  );
};

export default LocationDetail;
