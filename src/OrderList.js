import React, { useRef } from "react";
import { Link } from "react-router-dom";
import OrderCard from "./OrderCard";

function OrderList  (props) {
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
        editRow={props.editRow}
        currentUser={props.currentUser}
        editing={props.editing}
        setEditing={props.setEditing}
        
      />
    );
  });
 

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h2>
        order List
        <Link to="add">
          <button className="ui button blue right">Add order</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Locations"
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
