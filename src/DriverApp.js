import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DriverList from "./DriverList";
import AddDriver from "./AddDriver";
import DriverDetail from "./DriverDetail";
import EditDriver from "./EditDriver";
import axios from "axios";

function DriverApp() {
  
  //Setting state
  const initialFormState = {id: null, driverCode: '', driverDescription: ''}
  const [drivers, setDrivers] = useState([]);
  const [currentDriver, setCurrentDriver] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  
  //API to drivers table
  const driversData = async () => {
    const response = await axios.get("api/drivers");
    return response.data;
  };
  
  
  //CRUD operations
  const addDriver = async driver => {

    const request = {
      ...driver
    };
     console.log("Test",request);
    const response = await axios.post("/api/drivers/", request);
      console.log(response);

    
		setDrivers([ ...drivers, response.data ])
	}
  const updateDriver = async (id, updatedDriver) => {
    const response = await axios.put(`/api/drivers/${id}/`, updatedDriver);

		setEditing(false)

    setDrivers(drivers.map(driver => (driver.id === id ? updatedDriver: driver)))
	}
 
  const editRow = driver => {
    setEditing(true)
    setCurrentDriver({id: driver.id, driverCode: driver.driverCode, driverDescription: driver.driverDescription})
  }

  const removeDriverHandler = async (id) => {
    await axios.delete(`/api/drivers/${id}`);
    const newDriverList = drivers.filter((driver) => {
      return driver.id !== id;
    });

    setDrivers(newDriverList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newDriverList = drivers.filter((driver) => {
        return Object.values(driver)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newDriverList);
    } else {
      setSearchResults(drivers);
    }
  };

  useEffect(() => {
    const getAllDrivers = async () => {
      const allDrivers = await driversData();
      if (allDrivers) setDrivers(allDrivers);
    };

    getAllDrivers();
  }, []);



  return (
    <div>
    <div className="ui container">
      
     
      
        <Routes>
          <Route
            path="/"
            exact
            element={<DriverList
                
                
                drivers={searchTerm.length < 1 ? drivers : searchResults}
                getDriverId={removeDriverHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
                editing={editing}
								setEditing={setEditing}
								currentDriver={currentDriver}
								updateDriver={updateDriver}
                editRow={editRow}
                driversData={driversData}
                
                
                
              />
            }
          />
          <Route
            path="add"
            element={<AddDriver  
              addDriver={addDriver}
              />
            }
          />

          <Route
            path="edit"
            element={<EditDriver
                state={{drivers}}
                
                editing={editing}
								setEditing={setEditing}
								currentDriver={currentDriver}
								updateDriver={updateDriver}
                
                
              />
            }
          />

          <Route path=":id" element={<DriverDetail
                currentDriver={currentDriver}
                drivers={drivers}
                
          /> }
          />
        </Routes>
      
    </div>
    </div>
    );
}

export default DriverApp;
