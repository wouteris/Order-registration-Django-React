import React, { useState } from "react";
import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DriverApp from "./DriverApp";
import axios from "axios";

function AddDriver(props) {
  const initialFormState = { id: null, driverCode: '', driverDescription: ''}
  const [ driver, setDriver ] = useState(initialFormState)
 
  const handleInputChange = event => {
		const { name, value } = event.target
		setDriver({ ...driver, [name]: value })
    
  }
 
  const history = useNavigate();
  
  


  return (
    <div className="ui main">
      <h2>Add driver</h2>
      <form className="ui form" onSubmit={event => {
        event.preventDefault()
        if (!driver.driverCode || !driver.driverDescription) return

        
        
        props.addDriver(driver)
        setDriver(initialFormState)
        history('/Driver')

      }} >
        <div className="field">
          <label>Code</label>
          <input
            type="text"
            name="driverCode"
            placeholder="Code"
            value={driver.driverCode}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="driverDescription"
            placeholder="Description"
            value={driver.driverDescription}
            onChange={handleInputChange}
          />
        </div>
        <button className="ui button blue">Add</button>
        <button  className="ui button red">Cancel</button>
      </form>
    </div>
  );
}


export default AddDriver
