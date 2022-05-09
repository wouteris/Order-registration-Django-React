import React from "react";
import { Link } from "react-router-dom";


const OrderCard = (props) => {
  const { id, orderID } = props.order;
  return (
    <div className="item">
      
      <div className="content">
        
        <Link
          to={{ pathname: `/order/${id}`, state: { order: props.order } }}
        >
          <div className="header">{orderID}</div>
          <div>{orderID}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)} 
      ></i>
      <Link to={{ pathname: `/edit`, state: { order: props.order } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default OrderCard;