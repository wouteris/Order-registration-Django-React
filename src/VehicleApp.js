import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import VehicleList from "./VehicleList";
import AddVehicle from "./AddVehicle";
import VehicleDetail from "./VehicleDetail";
import EditVehicle from "./EditVehicle";
import axios from "axios";

function VehicleApp() {
  const LOCAL_STORAGE_KEY = "Vehicles";
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //RetrieveVehicles
  const retrieveVehicles =  async () => {
    const response = await axios.get("api/vehicles");
    return response.data;
  };

  const addVehicleHandler = async (vehicle) => {
    console.log(vehicle);

    //console.log(uuid());
   const request = {
   //   id: uuid(),
   //...Vehicle,
     //id: 2,
     ...vehicle,
     //VehicleCode: this.state.VehicleCode,
    //VehicleDescription:"NU"
   };
    console.log(request);
    const response = await axios.post("/api/vehicles/", request);
    console.log(response);
    setVehicles([...vehicles, response.data]);

    
   
    
  };

  
  
  

  const updateVehicleHandler = async (vehicle) => {
    const response = await axios.put(`/api/vehicles/${vehicle.id}/`, vehicle);
    const { id, vehicleCode, vehicleDescription } = response.data;
    setVehicles(
      vehicles.map((vehicle) => {
        return vehicle.id === id ? { ...response.data } : vehicle;
      })
    );
  };

  const removeVehicleHandler = async (id) => {
    await axios.delete(`/api/vehicles/${id}`);
    const newVehicleList = vehicles.filter((vehicle) => {
      return vehicle.id !== id;
    });

    setVehicles(newVehicleList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newVehicleList = vehicles.filter((vehicle) => {
        return Object.values(vehicle)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newVehicleList);
    } else {
      setSearchResults(vehicles);
    }
  };

  useEffect(() => {
    // const retriveVehicles = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveVehicles) setVehicles(retriveVehicles);
    const getAllVehicles = async () => {
      const allVehicles = await retrieveVehicles();
      if (allVehicles) setVehicles(allVehicles);
    };

    getAllVehicles();
  }, []);

  //useEffect(() => {
  //  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Vehicles));
  //}, [Vehicles]);

  return (
    <div>
    <div className="ui container">
      
      
      
        <Routes>
          <Route
            path="/"
            exact
            element={<VehicleList
                
                vehicles={searchTerm.length < 1 ? vehicles : searchResults}
                getVehicleId={removeVehicleHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="add"
            element={<AddVehicle addVehicleHandler={addVehicleHandler} />
            }
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditVehicle
                {...props}
                updateVehicleHandler={updateVehicleHandler}
              />
            )}
          />

          <Route path="/vehicle/:id" component={VehicleDetail} />
        </Routes>
      
    </div>
    </div>
    );
}

export default VehicleApp;
