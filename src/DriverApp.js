import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DriverList from "./DriverList";
import AddDriver from "./AddDriver";
import DriverDetail from "./DriverDetail";
import EditDriver from "./EditDriver";
import axios from "axios";

function DriverApp() {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const retrieveDrivers =  async () => {
    const response = await axios.get("api/drivers");
    return response.data;
  };

  const addDriverHandler = async (driver) => {
    console.log(driver);
   const request = {
     ...driver,

   };
    console.log(request);
    const response = await axios.post("/api/drivers/", request);
    console.log(response);
    setDrivers([...drivers, response.data]);

    
   
    
  };

  

  const updateDriverHandler = async (driver) => {
    const response = await axios.put(`/api/drivers/${driver.id}/`, driver);
    const { id, driverCode, driverDescription } = response.data;
    setDrivers(
      drivers.map((driver) => {
        return driver.id === id ? { ...response.data } : driver;
      })
    );
  };

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
      const allDrivers = await retrieveDrivers();
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
              />
            }
          />
          <Route
            path="add"
            element={<AddDriver  addDriverHandler={addDriverHandler} />
            }
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditDriver
                {...props}
                updateDriverHandler={updateDriverHandler}
              />
            )}
          />

          <Route path="/driver/:id" component={DriverDetail} />
        </Routes>
      
    </div>
    </div>
    );
}

export default DriverApp;
