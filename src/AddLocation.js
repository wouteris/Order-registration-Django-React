import React, { useState } from "react";
import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LocationApp from "./LocationApp";
import axios from "axios";

function AddLocation(props) {
  const initialFormState = { id: null, locationCode: '', locationDescription: ''}
  const [ location, setLocation ] = useState(initialFormState)
 
  const handleInputChange = event => {
		const { name, value } = event.target
		setLocation({ ...location, [name]: value })
    
  }
 
  const history = useNavigate();
  
  


  return (
    <div className="ui main">
      <h2>Add location</h2>
      <form className="ui form" onSubmit={event => {
        event.preventDefault()
        if (!location.locationCode || !location.locationDescription) return

        
        
        props.addLocation(location)
        setLocation(initialFormState)
        history('/Location')

      }} >
        <div className="field">
          <label>Code</label>
          <input
            type="text"
            name="locationCode"
            placeholder="Code"
            value={location.locationCode}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="locationDescription"
            placeholder="Description"
            value={location.locationDescription}
            onChange={handleInputChange}
          />
        </div>
        <button className="ui button blue">Add</button>
        <button  className="ui button red">Cancel</button>
      </form>
    </div>
  );
}


export default AddLocation
