import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function EditLocation(props) {

  //
  const [location, setLocation] = useState(props.currentLocation)
  const history = useNavigate();

  //
  useEffect(() => {

    setLocation(props.currentLocation)
    
  } , [ props ]); 

  //
  const handleInputChange = event => {
    const { name, value } = event.target

    setLocation({ ...location, [name]: value })
  

  }
   
  
  //
    return (
      <div className="ui main">
        <h2>Edit location</h2>
        <form className="ui form" onSubmit={event => {
        event.preventDefault()
        props.setEditing(false)
        props.updateLocation(location.id, location)
        history('/location')
      }}>
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
          <button className="ui button blue">Update</button>
          <button className="ui button red">Cancel</button>
        </form>
      </div>
    );
  }


export default EditLocation;
