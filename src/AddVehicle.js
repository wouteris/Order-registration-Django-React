import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddVehicle(props) {
  const initialFormState = { id: null, vehicleCode: '', vehicleDescription: ''}
  const [ vehicle, setVehicle ] = useState(initialFormState)
 
  const handleInputChange = event => {
		const { name, value } = event.target
		setVehicle({ ...vehicle, [name]: value })
    
  }
 
  const history = useNavigate();
  
  


  return (
    <div className="ui main">
      <h2>Add vehicle</h2>
      <form className="ui form" onSubmit={event => {
        event.preventDefault()
        if (!vehicle.vehicleCode || !vehicle.vehicleDescription) return

        
        
        props.addVehicle(vehicle)
        setVehicle(initialFormState)
        history('/vehicle')

      }} >
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
        <button className="ui button blue">Add</button>
        <button  className="ui button red">Cancel</button>
      </form>
    </div>
  );
}


export default AddVehicle
