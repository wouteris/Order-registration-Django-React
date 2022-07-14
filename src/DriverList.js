import React, { useRef } from "react";
import { Link } from "react-router-dom";
import DriverCard from "./DriverCard";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

function DriverList  (props) {
  const inputEl = useRef("");

  const deleteDriverHandler = (id) => {
    props.getDriverId(id);
  };

  const renderDriverList = props.drivers.map((driver) => {
    return (
      <DriverCard
        driver={driver}
        clickHandler={deleteDriverHandler}
        key={driver.id}
        editRow={props.editRow}
        currentUser={props.currentUser}
        editing={props.editing}
        setEditing={props.setEditing}
        
      />
    );
  });
 

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h2>
        Driver List
        <Link to="add">
          <button className="ui button blue right">Add Driver</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Drivers"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
      <TableContainer component={Paper}>
            <Table sx={{ Width: 500 }} aria-label="simple table">
      
              </Table>
          </TableContainer>
      </div>
      <div className="ui celled list">
        <DriverCard 
                
                clickHandler={deleteDriverHandler}
                
                editRow={props.editRow}
                currentUser={props.currentUser}
                editing={props.editing}
                setEditing={props.setEditing}
                drivers={props.drivers}
        />
      </div>
    </div>
  );
};

export default DriverList;
