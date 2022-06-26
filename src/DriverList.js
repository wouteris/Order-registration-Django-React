import React, { useRef } from "react";
import { Link } from "react-router-dom";
import DriverCard from "./DriverCard";

function DriverList  (props) {
  const inputEl = useRef("");

  const deleteDriverHandler = (id) => {
    props.getDriverId(id);
  };

  const renderDriverList = props.drivers.map((driver) => {
    return (
      <DriverCard
        driver={driver}
        clickHandler={deleteDriverHandler}
        key={driver.id}
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
        Driver List
        <Link to="add">
          <button className="ui button blue right">Add Driver</button>
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
      {renderDriverList.length > 0
          ? renderDriverList
          : "No drivers available"}
      </div>
    </div>
  );
};

export default DriverList;
