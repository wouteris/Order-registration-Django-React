import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LocationList from "./LocationList";
import AddLocation from "./AddLocation";
import LocationDetail from "./LocationDetail";
import EditLocation from "./EditLocation";
import axios from "axios";

function LocationApp() {
  
  //Setting state
  const initialFormState = {id: null, locationCode: '', locationDescription: ''}
  const [locations, setlocations] = useState([]);
  const [currentLocation, setCurrentlocation] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  
  //API to locations table
  const locationsData = async () => {
    const response = await axios.get("api/locations");
    return response.data;
  };
  
  
  //CRUD operations
  const addLocation = async location => {

    const request = {
      ...location
    };
     console.log("Test",request);
    const response = await axios.post("/api/locations/", request);
      console.log(response);

    
		setlocations([ ...locations, response.data ])
	}
  const updateLocation = async (id, updatedlocation) => {
    const response = await axios.put(`/api/locations/${id}/`, updatedlocation);

		setEditing(false)

    setlocations(locations.map(location => (location.id === id ? updatedlocation: location)))
	}
 
  const editRow = location => {
    setEditing(true)
    setCurrentlocation({id: location.id, locationCode: location.locationCode, locationDescription: location.locationDescription})
  }

  const removelocationHandler = async (id) => {
    await axios.delete(`/api/locations/${id}`);
    const newlocationList = locations.filter((location) => {
      return location.id !== id;
    });

    setlocations(newlocationList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newlocationList = locations.filter((location) => {
        return Object.values(location)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newlocationList);
    } else {
      setSearchResults(locations);
    }
  };

  useEffect(() => {
    const getAlllocations = async () => {
      const alllocations = await locationsData();
      if (alllocations) setlocations(alllocations);
    };

    getAlllocations();
  }, []);



  return (
    <div>
    <div className="ui container">
      
     
      
        <Routes>
          <Route
            path="/"
            exact
            element={<LocationList
                
                
                locations={searchTerm.length < 1 ? locations : searchResults}
                getlocationId={removelocationHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
                editing={editing}
								setEditing={setEditing}
								currentLocation={currentLocation}
								updateLocation={updateLocation}
                editRow={editRow}
                locationsData={locationsData}
                
                
                
              />
            }
          />
          <Route
            path="add"
            element={<AddLocation  
              addLocation={addLocation}
              />
            }
          />

          <Route
            path="edit"
            element={<EditLocation
                state={{locations}}
                
                editing={editing}
								setEditing={setEditing}
								currentLocation={currentLocation}
								updateLocation={updateLocation}
                
                
              />
            }
          />

          <Route path=":id" element={<LocationDetail
                currentLocation={currentLocation}
                locations={locations}
                
          /> }
          />
        </Routes>
      
    </div>
    </div>
    );
}

export default LocationApp;
