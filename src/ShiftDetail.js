import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import user from "./images/user.jpg";


function ShiftDetail  (props) {
  const [shift, setShift] = useState(props.currentShift)
  const history = useNavigate();
 
  
  useEffect(() => {

  setShift(props.currentShift)
  
  } , [ props ]); 


 
  return (
    <div className="main">
      <div className="ui card centered">
      <div className="image">
      <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">shiftname:  {shift.shiftDescription}</div>
          <div className="description">shiftcode: {shift.shiftCode} </div>
        </div>
      </div>
      <div className="center-div">
        
          <button onClick = {() =>history('/shift')} className="ui button blue center">
            Back to Location List
            
          </button>
        
      </div>
    </div>
  );
};

export default ShiftDetail;
