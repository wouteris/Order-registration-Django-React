import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ShiftList from "./ShiftList";
import AddShift from "./AddShift";
import ShiftDetail from "./ShiftDetail";
import EditShift from "./EditShift";
import axios from "axios";

function ShiftApp() {
  
  //Setting state
  const initialFormState = {id: null, shiftCode: '', shiftDescription: ''}
  const [shifts, setShifts] = useState([]);
  const [currentShift, setCurrentShift] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  
  //API to shifts table
  const shiftsData = async () => {
    const response = await axios.get("api/shifts");
    return response.data;
  };
  
  
  //CRUD operations
  const addShift = async shift => {

    const request = {
      ...shift
    };
     console.log("Test",request);
    const response = await axios.post("/api/shifts/", request);
      console.log(response);

    
		setShifts([ ...shifts, response.data ])
	}
  const updateShift = async (id, updatedshift) => {
    const response = await axios.put(`/api/shifts/${id}/`, updatedshift);

		setEditing(false)

    setShifts(shifts.map(shift => (shift.id === id ? updatedshift: shift)))
	}
 
  const editRow = shift => {
    setEditing(true)
    setCurrentShift({id: shift.id, shiftCode: shift.shiftCode, shiftDescription: shift.shiftDescription})
  }

  const removeShiftHandler = async (id) => {
    await axios.delete(`/api/shifts/${id}`);
    const newshiftList = shifts.filter((shift) => {
      return shift.id !== id;
    });

    setShifts(newshiftList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newshiftList = shifts.filter((shift) => {
        return Object.values(shift)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newshiftList);
    } else {
      setSearchResults(shifts);
    }
  };

  useEffect(() => {
    const getAllshifts = async () => {
      const allshifts = await shiftsData();
      if (allshifts) setShifts(allshifts);
    };

    getAllshifts();
  }, []);



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
                editing={editing}
								setEditing={setEditing}
								currentShift={currentShift}
								updateShift={updateShift}
                editRow={editRow}
                shiftsData={shiftsData}
                
                
                
              />
            }
          />
          <Route
            path="add"
            element={<AddShift  
              addShift={addShift}
              />
            }
          />

          <Route
            path="edit"
            element={<EditShift
                state={{shifts}}
                
                editing={editing}
								setEditing={setEditing}
								currentShift={currentShift}
								updateShift={updateShift}
                
                
              />
            }
          />

          <Route path=":id" element={<ShiftDetail
                currentShift={currentShift}
                shifts={shifts}
                
          /> }
          />
        </Routes>
      
    </div>
    </div>
    );
}

export default ShiftApp;
