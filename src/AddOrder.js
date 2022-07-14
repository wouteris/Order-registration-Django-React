import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import SelectLocation from './SelectLocation'
import SelectDriver from './SelectDriver'
import SelectProduct from './SelectProduct'
import SelectVehicle from './SelectVehicle'


function AddOrder(props) {
  const initialFormState = { id: null, orderID: '', shiftCode: ''}
  const [ order, setOrder ] = useState(initialFormState)
 
  const handleInputChange = event => {
		const { name, value } = event.target
		setOrder({ ...order, [name]: value })
    
  }
 
  const history = useNavigate();
  
  


  return (
    <div className="ui main">
      <h2>Add order</h2>
      <form className="ui form" onSubmit={event => {
        event.preventDefault()
        if (!order.orderID) return

        
        
        props.addOrder(order)
        setOrder(initialFormState)
        history('/order')

      }} >
        <div className="field">
          <label>orderID</label>
          <input
            type="text"
            name="orderID"
            placeholder="orderID"
            value={order.orderID}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>shiftCode</label>
          <input
            type="text"
            name="shiftCode"
            placeholder="shiftCode"
            value={order.shiftCode}
            onChange={handleInputChange}
          />
        </div>
        <FormLabel id="demo-row-radio-buttons-group-label">shiftType</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Day" checked={order.shiftType ==="Day"} name="shiftType" onChange={handleInputChange} control={<Radio />} label="Day" />
        <FormControlLabel value="Night" checked={order.shiftType ==="Night"} name="shiftType" onChange={handleInputChange} control={<Radio />} label="Night" />
        <FormControlLabel value="Other" checked={order.shiftType ==="Other"} name="shiftType" onChange={handleInputChange} control={<Radio />} label="Other" />
        
      </RadioGroup>
      <div className="field">
            <label>shiftDate</label>
            <input
              type="date"
              name="shiftDate"
              placeholder="shiftDate"
              value={order.shiftDate}
              onChange={handleInputChange}
            />
          </div>
      <div className="field">
            <label>loadingDate</label>
            <input
              type="date"
              name="loadingDate"
              placeholder="loadingDate"
              value={order.loadingDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>loadingTime</label>
            <input
              type="time"
              name="loadingTime"
              placeholder="loadingTime"
              value={order.loadingTime}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
          <label>loadingLocationCode</label>
          <SelectLocation 
            name="loadingLocation"
            value={order.loadingLocation}
            handleInputChange={handleInputChange}
          />
          </div>
          <div className="field">
          <label>loadingDriverCode</label>
          <SelectDriver 
            name="loadingDriverCode"
            value={order.loadingDriverCode}
            handleInputChange={handleInputChange}
          />
          </div>
          <div className="field">
            <label>deliveryDate</label>
            <input
              type="date"
              name="deliveryDate"
              placeholder="deliveryDate"
              value={order.deliveryDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>deliveryTime</label>
            <input
              type="time"
              name="deliveryTime"
              placeholder="deliveryTime"
              value={order.deliveryTime}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
          <label>deliveryLocation</label>
          <SelectLocation 
            name="deliveryLocation"
            value={order.deliveryLocation}
            handleInputChange={handleInputChange}
          />
          </div>
          <div className="field">
          <label>deliveryDriverCode</label>
          <SelectDriver 
            name="deliveryDriverCode"
            value={order.deliveryDriverCode}
            handleInputChange={handleInputChange}
          />
          </div>
          <div className="field">
          <label>productCode</label>
          <SelectProduct 
            name="productCode"
            value={order.productCode}
            handleInputChange={handleInputChange}
          />
          </div>
          <div className="field">
            <label>quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="quantity"
              value={order.quantity}
              onChange={handleInputChange}
            />
          </div>
          <FormLabel id="demo-row-radio-buttons-group-label">orderStatus</FormLabel>
          <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Outstanding" checked={order.orderStatus ==="Outstanding"} name="orderStatus" onChange={handleInputChange} control={<Radio />} label="Outstanding" />
        <FormControlLabel value="Finished" checked={order.orderStatus ==="Finished"} name="orderStatus" onChange={handleInputChange} control={<Radio />} label="Finished" />
           
      </RadioGroup>
          <div className="field">
          <label>vehicleID</label>
          <SelectVehicle 
            name="vehicleID"
            value={order.vehicleID}
            handleInputChange={handleInputChange}
          />
          </div>

          

        <button className="ui button blue">Add</button>
        <button  className="ui button red">Cancel</button>
      </form>
    </div>
  );
}


export default AddOrder
