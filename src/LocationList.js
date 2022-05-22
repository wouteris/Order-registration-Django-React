import React, { useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import LocationCard from "./LocationCard";

const LocationList = (props) => {
  const inputEl = useRef("");
  const deleteLocationHandler = (id) => {
    props.getLocationId(id);
  };

 
  const renderLocationList = props.locations.map((location) => {
    return (
      <LocationCard
        location={location}
        clickHandler={deleteLocationHandler}
        key={location.id}
      />
    );
  });
 


  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h2>
        Location List
        <Link to="add">
          <button className="ui button blue right">Add Location</button>
        </Link>
        <Outlet />
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
      {renderLocationList.length > 0
          ? renderLocationList
          : "No locations available"}
      </div>
    </div>
  );
};

export default LocationList;
