import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "./api/products";
import "./App.css";
import Header from "./Header";
import ShiftList from "./ShiftList";
import AddShift from "./AddShift";
import ShiftDetail from "./ShiftDetail";
import EditShift from "./EditShift";
import axios from "axios";

function ShiftApp() {
  const LOCAL_STORAGE_KEY = "shifts";
  const [shifts, setShifts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //RetrieveProducts
  const retrieveShifts =  async () => {
    const response = await axios.get("api/shifts");
    return response.data;
  };

  const addShiftHandler = async (shift) => {
    console.log(shift);

    //console.log(uuid());
   const request = {
   //   id: uuid(),
   //...product,
     //id: 2,
     ...shift,
     //productCode: this.state.productCode,
    //productDescription:"NU"
   };
    console.log(request);
    const response = await axios.post("/api/shifts/", request);
    console.log(response);
    setShifts([...shifts, response.data]);

    
   
    
  };

  const addShifts = {
    id: 2,
    shiftCode: "NU",
    shiftDescription: "NU",
  }
  api.post('api/shifts', addShifts)
  .then(res => console.log(res.data));
  

  const updateShiftHandler = async (shift) => {
    const response = await axios.put(`/api/shifts/${shift.id}/`, shift);
    const { id, shiftCode, shiftDescription } = response.data;
    setShifts(
      shifts.map((shift) => {
        return shift.id === id ? { ...response.data } : shift;
      })
    );
  };

  const removeShiftHandler = async (id) => {
    await axios.delete(`/api/shifts/${id}`);
    const newShiftList = shifts.filter((shift) => {
      return shift.id !== id;
    });

    setShifts(newShiftList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newShiftList = shifts.filter((shift) => {
        return Object.values(shift)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newShiftList);
    } else {
      setSearchResults(shifts);
    }
  };

  useEffect(() => {
    // const retriveProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveProducts) setProducts(retriveProducts);
    const getAllShifts = async () => {
      const allShifts = await retrieveShifts();
      if (allShifts) setShifts(allShifts);
    };

    getAllShifts();
  }, []);

  //useEffect(() => {
  //  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  //}, [products]);

  return (
    <div>
    <div className="ui container">
      
      
       
        <Routes>
          <Route
            path="/"
            exact
            element={<ShiftList
                
                shifts={searchTerm.length < 1 ? shifts : searchResults}
                getShiftId={removeShiftHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="add"
            element={<AddShift  addShiftHandler={addShiftHandler} />
            }
          />

          <Route
            path="/edit"
            element={<EditShift
               
                updateShiftHandler={updateShiftHandler}
              />
            }
          />

          <Route path="/shift/:id" component={ShiftDetail} />
        </Routes>
      
    </div>
    </div>
    );
}

export default ShiftApp;
