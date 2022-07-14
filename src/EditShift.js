import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


function EditShift(props) {

  //
  const [shift, setShift] = useState(props.currentShift)
  const history = useNavigate();

  //
  useEffect(() => {

    setShift(props.currentShift)
    
  } , [ props ]); 

  //
  const handleInputChange = event => {
    const { name, value } = event.target

    setShift({ ...shift, [name]: value })
  

  }
   
  
  //
    return (
      <div className="ui main">
        <h2>Edit shift</h2>
        <form className="ui form" onSubmit={event => {
        event.preventDefault()
        props.setEditing(false)
        props.updateShift(shift.id, shift)
        history('/shift')
      }}>
          <div className="field">
            <label>Code</label>
            <input
              type="text"
              name="shiftCode"
              placeholder="Code"
              value={shift.shiftCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="shiftDescription"
              placeholder="Description"
              value={shift.shiftDescription}
              onChange={handleInputChange}
            />
          </div>
          <button className="ui button blue">Update</button>
          <button className="ui button red">Cancel</button>
        </form>
      </div>
    );
  }


export default EditShift;
