import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


function EditVehicle(props) {

  //
  const [vehicle, setVehicle] = useState(props.currentVehicle)
  const history = useNavigate();

  //
  useEffect(() => {

    setVehicle(props.currentVehicle)
    
  } , [ props ]); 

  //
  const handleInputChange = event => {
    const { name, value } = event.target

    setVehicle({ ...vehicle, [name]: value })
  

  }
   
  
  //
    return (
      <div className="ui main">
        <h2>Edit vehicle</h2>
        <form className="ui form" onSubmit={event => {
        event.preventDefault()
        props.setEditing(false)
        props.updateVehicle(vehicle.id, vehicle)
        history('/vehicle')
      }}>
          <div className="field">
            <label>Code</label>
            <input
              type="text"
              name="vehicleCode"
              placeholder="Code"
              value={vehicle.vehicleCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="vehicleDescription"
              placeholder="Description"
              value={vehicle.vehicleDescription}
              onChange={handleInputChange}
            />
          </div>
          <button className="ui button blue">Update</button>
          <button className="ui button red">Cancel</button>
        </form>
      </div>
    );
  }


export default EditVehicle;
