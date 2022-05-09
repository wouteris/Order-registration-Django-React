import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "./api/products";
import "./App.css";
import Header from "./Header";
import DriverList from "./DriverList";
import AddDriver from "./AddDriver";
import DriverDetail from "./DriverDetail";
import EditDriver from "./EditDriver";
import axios from "axios";

function LocationApp() {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //RetrieveProducts
  const retrieveDrivers =  async () => {
    const response = await axios.get("api/locations");
    return response.data;
  };

  const addDriverHandler = async (driver) => {
    console.log(driver);

    //console.log(uuid());
   const request = {
   //   id: uuid(),
   //...product,
     //id: 2,
     ...driver,
     //productCode: this.state.productCode,
    //productDescription:"NU"
   };
    console.log(request);
    const response = await axios.post("/api/drivers/", request);
    console.log(response);
    setDrivers([...drivers, response.data]);

    
   
    
  };

  

  const updateDriverHandler = async (location) => {
    const response = await axios.put(`/api/drivers/${location.id}/`, location);
    const { id, driverCode, driverDescription } = response.data;
    setDrivers(
      drivers.map((location) => {
        return location.id === id ? { ...response.data } : location;
      })
    );
  };

  const removeDriverHandler = async (id) => {
    await axios.delete(`/api/drivers/${id}`);
    const newDriverList = drivers.filter((location) => {
      return location.id !== id;
    });

    setDrivers(newDriverList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newDriverList = drivers.filter((location) => {
        return Object.values(location)
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
    // const retriveProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveProducts) setProducts(retriveProducts);
    const getAllDrivers = async () => {
      const allDrivers = await retrieveDrivers();
      if (allDrivers) setDrivers(allDrivers);
    };

    getAllDrivers();
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
              <DriverList
                {...props}
                locations={searchTerm.length < 1 ? drivers : searchResults}
                getLocationId={removeDriverHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddDriver {...props} addDriverHandler={addDriverHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditDriver
                {...props}
                updateLocationHandler={updateDriverHandler}
              />
            )}
          />

          <Route path="/location/:id" component={DriverDetail} />
        </Switch>
      </Router>
    </div>
    </div>
    );
}

export default LocationApp;
