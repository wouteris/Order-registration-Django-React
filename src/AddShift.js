import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddShift(props) {
  const initialFormState = { id: null, shiftCode: '', shiftDescription: ''}
  const [ shift, setshift ] = useState(initialFormState)
 
  const handleInputChange = event => {
		const { name, value } = event.target
		setshift({ ...shift, [name]: value })
    
  }
 
  const history = useNavigate();
  
  


  return (
    <div className="ui main">
      <h2>Add shift</h2>
      <form className="ui form" onSubmit={event => {
        event.preventDefault()
        if (!shift.shiftCode || !shift.shiftDescription) return

        
        
        props.addShift(shift)
        setshift(initialFormState)
        history('/shift')

      }} >
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
        <button className="ui button blue">Add</button>
        <button  className="ui button red">Cancel</button>
      </form>
    </div>
  );
}


export default AddShift
