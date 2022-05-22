import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ShiftCard from "./ShiftCard";

const ShiftList = (props) => {
  const inputEl = useRef("");
  const deleteShiftHandler = (id) => {
    props.getShiftId(id);
  };

 
  const renderShiftList = props.shifts.map((shift) => {
    return (
      <ShiftCard
        shift={shift}
        clickHandler={deleteShiftHandler}
        key={shift.id}
      />
    );
  });
 


  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h2>
        Shift List
        <Link to="add">
          <button className="ui button blue right">Add Shift</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Shifts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
      {renderShiftList.length > 0
          ? renderShiftList
          : "No shifts available"}
      </div>
    </div>
  );
};

export default ShiftList;
