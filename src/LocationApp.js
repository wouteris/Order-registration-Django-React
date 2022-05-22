import React, { useState, useEffect } from "react";
import { Routes, Route, useRouteMatch, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import LocationList from "./LocationList";
import AddLocation from "./AddLocation";
import LocationDetail from "./LocationDetail";
import EditLocation from "./EditLocation";
import ProductApp from "./ProductApp";
import axios from "axios";

function LocationApp() {
  const [locations, setLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  
  
  
  //RetrieveLocations
  const retrieveLocations =  async () => {
    const response = await axios.get("api/locations");
    return response.data;
  };

  const addLocationHandler = async (location) => {
    console.log(location);

  
   const request = {
     ...location
   };
    console.log(request);
    const response = await axios.post("/api/locations/", request);
    console.log(response);
    setLocations([...locations, response.data]);

    
   
    
  };

  const updateLocationHandler = async (location) => {
    const response = await axios.put(`/api/locations/${location.id}/`, location);
    const { id, locationCode, locationDescription } = response.data;
    setLocations(
      locations.map((location) => {
        return location.id === id ? { ...response.data } : location;
      })
    );
  };

  const removeLocationHandler = async (id) => {
    await axios.delete(`/api/locations/${id}`);
    const newLocationList = locations.filter((location) => {
      return location.id !== id;
    });

    setLocations(newLocationList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newLocationList = locations.filter((location) => {
        return Object.values(location)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newLocationList);
    } else {
      setSearchResults(locations);
    }
  };

  useEffect(() => {
    const getAllLocations = async () => {
      const allLocations = await retrieveLocations();
      if (allLocations) setLocations(allLocations);
    };

    getAllLocations();
  }, []);

 

  return (
    <div>
    <div className="ui container">
      
     
      
        <Routes>
          <Route
            path="/"
            
            element={<LocationList
                
                locations={searchTerm.length < 1 ? locations : searchResults}
                getLocationId={removeLocationHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
            <Route
            path="add"
            element={<AddLocation
                addLocationHandler={addLocationHandler}
              />
            }
          />

          <Route
            path="edit"
            element={<EditLocation
                updateLocationHandler={updateLocationHandler}
              />
            }
          />

          <Route path="/location/:id" element={LocationDetail} />
        </Routes>
    
    </div>
    </div>
    
    );
}

export default LocationApp;
