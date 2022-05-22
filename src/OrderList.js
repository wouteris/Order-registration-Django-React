import React, { useRef } from "react";
import { Link } from "react-router-dom";
import OrderCard from "./OrderCard";

const OrderList = (props) => {
  const inputEl = useRef("");
  const deleteOrderHandler = (id) => {
    props.getOrderId(id);
  };

 
  const renderOrderList = props.orders.map((order) => {
    return (
      <OrderCard
        order={order}
        clickHandler={deleteOrderHandler}
        key={order.id}
      />
    );
  });
 


  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h2>
        Order List
        <Link to="add">
          <button className="ui button blue right">Add Order</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Orders"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
      {renderOrderList.length > 0
          ? renderOrderList
          : "No orders available"}
      </div>
    </div>
  );
};

export default OrderList;
