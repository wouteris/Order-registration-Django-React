import React, { useRef } from "react";
import { Link } from "react-router-dom";
import VehicleCard from "./VehicleCard";

const VehicleList = (props) => {
  const inputEl = useRef("");
  const deleteVehicleHandler = (id) => {
    props.getVehicleId(id);
  };

 
  const renderVehicleList = props.vehicles.map((vehicle) => {
    return (
      <VehicleCard
        vehicle={vehicle}
        clickHandler={deleteVehicleHandler}
        key={vehicle.id}
      />
    );
  });
 


  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h2>
        Vehicle List
        <Link to="/add">
          <button className="ui button blue right">Add Vehicle</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Vehicles"
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
