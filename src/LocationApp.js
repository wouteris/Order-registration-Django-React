import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "./api/products";
import "./App.css";
import Header from "./Header";
import LocationList from "./LocationList";
import AddLocation from "./AddLocation";
import LocationDetail from "./LocationDetail";
import EditLocation from "./EditLocation";
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

    //console.log(uuid());
   const request = {
   //   id: uuid(),
   //...product,
     //id: 2,
     ...location,
     //productCode: this.state.productCode,
    //productDescription:"NU"
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
    // const retriveProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveProducts) setProducts(retriveProducts);
    const getAllLocations = async () => {
      const allLocations = await retrieveLocations();
      if (allLocations) setLocations(allLocations);
    };

    getAllLocations();
  }, []);

  //useEffect(() => {
  //  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  //}, [products]);

  return (
    <div>
    <div className="ui container">
      
      <Router>
       <Header /> 
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <LocationList
                {...props}
                locations={searchTerm.length < 1 ? locations : searchResults}
                getLocationId={removeLocationHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddLocation {...props} addLocationHandler={addLocationHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditLocation
                {...props}
                updateLocationHandler={updateLocationHandler}
              />
            )}
          />

          <Route path="/location/:id" component={LocationDetail} />
        </Switch>
      </Router>
    </div>
    </div>
    );
}

export default LocationApp;
