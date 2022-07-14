import React from "react";
import { Link } from "react-router-dom";


function OrderCard (props)  {

  
  
  return (
    
    <div className="item">
      
      <div className="content">
        
        <Link
          to={{ pathname: `/order/${props.order.id}` } } onClick = {() =>props.editRow(props.order)}>
          
          <div className="header">{props.order.orderID}</div>
          <div>{props.order.shiftCode}</div>
          <div>{props.order.id}</div>
          
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(props.order.id)} 
      ></i>
      <Link to={{ pathname: `/order/edit` }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
          onClick = {() =>props.editRow(props.order)}
        ></i>
      </Link>
    </div>
  );
};

export default OrderCard;
