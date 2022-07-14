import React, { useRef } from "react";
import { Link } from "react-router-dom";
import VehicleCard from "./VehicleCard";

function VehicleList  (props) {
  const inputEl = useRef("");

  const deletevehicleHandler = (id) => {
    props.getvehicleId(id);
  };

  const renderVehicleList = props.vehicles.map((vehicle) => {
    return (
      <VehicleCard
        vehicle={vehicle}
        clickHandler={deletevehicleHandler}
        key={vehicle.id}
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
        vehicle List
        <Link to="add">
          <button className="ui button blue right">Add vehicle</button>
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
      {renderVehicleList.length > 0
          ? renderVehicleList
          : "No vehicles available"}
      </div>
    </div>
  );
};

export default VehicleList;
