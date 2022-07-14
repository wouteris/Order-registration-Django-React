import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import user from "./images/user.jpg";


function OrderDetail  (props) {
  const [order, setOrder] = useState(props.currentOrder)
  const history = useNavigate();
 
  
  useEffect(() => {

  setOrder(props.currentOrder)
  
  } , [ props ]); 


 
  return (
    <div className="main">
      <div className="ui card centered">
      <div className="image">
      <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">orderID:  {order.orderID}</div>
          <div className="description">shiftcode: {order.shiftCode} </div>
        </div>
      </div>
      <div className="center-div">
        
          <button onClick = {() =>history('/order')} className="ui button blue center">
            Back to order List
            
          </button>
        
      </div>
    </div>
  );
};

export default OrderDetail;
