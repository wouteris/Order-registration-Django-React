import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import VehicleList from "./VehicleList";
import AddVehicle from "./AddVehicle";
import VehicleDetail from "./VehicleDetail";
import EditVehicle from "./EditVehicle";
import axios from "axios";

function VehicleApp() {
  
  //Setting state
  const initialFormState = {id: null, vehicleCode: '', vehicleDescription: ''}
  const [vehicles, setVehicles] = useState([]);
  const [currentVehicle, setCurrentVehicle] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  
  //API to vehicles table
  const vehiclesData = async () => {
    const response = await axios.get("api/vehicles");
    return response.data;
  };
  
  
  //CRUD operations
  const addVehicle = async vehicle => {

    const request = {
      ...vehicle
    };
     console.log("Test",request);
    const response = await axios.post("/api/vehicles/", request);
      console.log(response);

    
		setVehicles([ ...vehicles, response.data ])
	}
  const updateVehicle = async (id, updatedVehicle) => {
    const response = await axios.put(`/api/vehicles/${id}/`, updatedVehicle);

		setEditing(false)

    setVehicles(vehicles.map(vehicle => (vehicle.id === id ? updatedVehicle: vehicle)))
	}
 
  const editRow = vehicle => {
    setEditing(true)
    setCurrentVehicle({id: vehicle.id, vehicleCode: vehicle.vehicleCode, vehicleDescription: vehicle.vehicleDescription})
  }

  const removeVehicleHandler = async (id) => {
    await axios.delete(`/api/vehicles/${id}`);
    const newvehicleList = vehicles.filter((vehicle) => {
      return vehicle.id !== id;
    });

    setVehicles(newvehicleList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newvehicleList = vehicles.filter((vehicle) => {
        return Object.values(vehicle)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newvehicleList);
    } else {
      setSearchResults(vehicles);
    }
  };

  useEffect(() => {
    const getAllvehicles = async () => {
      const allvehicles = await vehiclesData();
      if (allvehicles) setVehicles(allvehicles);
    };

    getAllvehicles();
  }, []);



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
                editing={editing}
								setEditing={setEditing}
								currentVehicle={currentVehicle}
								updateVehicle={updateVehicle}
                editRow={editRow}
                vehiclesData={vehiclesData}
                
                
                
              />
            }
          />
          <Route
            path="add"
            element={<AddVehicle  
              addVehicle={addVehicle}
              />
            }
          />

          <Route
            path="edit"
            element={<EditVehicle
                state={{vehicles}}
                
                editing={editing}
								setEditing={setEditing}
								currentVehicle={currentVehicle}
								updateVehicle={updateVehicle}
                
                
              />
            }
          />

          <Route path=":id" element={<VehicleDetail
                currentVehicle={currentVehicle}
                vehicles={vehicles}
                
          /> }
          />
        </Routes>
      
    </div>
    </div>
    );
}

export default VehicleApp;
