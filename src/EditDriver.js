import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditDriver(props) {

  //
  const [driver, setDriver] = useState(props.currentDriver)
  const history = useNavigate();

  //
  useEffect(() => {

    setDriver(props.currentDriver)
    
  } , [ props ]); 

  //
  const handleInputChange = event => {
    const { name, value } = event.target

    setDriver({ ...driver, [name]: value })
  

  }
   
  
  //
    return (
      <div className="ui main">
        <h2>Edit driver</h2>
        <form className="ui form" onSubmit={event => {
        event.preventDefault()
        props.setEditing(false)
        props.updateDriver(driver.id, driver)
        history('/Driver')
      }}>
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
          <button className="ui button blue">Update</button>
          <button claasName="ui button red">Cancel</button>
        </form>
      </div>
    );
  }


export default EditDriver;
