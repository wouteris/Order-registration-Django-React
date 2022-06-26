import React, { useState } from "react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import DriverApp from "./DriverApp";
import axios from "axios";

function AddDriver() {
  
  const [testData, setTestData] = useState([])
  
  const addItem = () => {
    setTestData([
      ...testData,
      {
        driverCode: '1000',
        driverDescription: 'Test handmatig'
      }
    ])   
  }


  return (
    <div className="ui main">
    <form className="ui form" onSubmit={addItem}>
      <div className = "field">
      <h1> Add Driver </h1>

      <label htmlFor="driverCode">driverCode</label>
      <input onChange ={(e) => setTestData({...testData, driverCode: e.target.value})} value={testData.driverCode} type="text" name="driverCode" id="driverCode" />
      </div>
      <div className = "field">
      <label htmlFor="driverDescription">driverDescription</label>
      <textarea onChange ={(e) => setTestData({...testData, driverDescription: e.target.value})} value={testData.driverDescription} name="driverDescription" id="driverDescription"></textarea>
      <input type="submit" value="Submit" />
      </div>
    </form>
    </div>
  )
}


export default AddDriver
