import React, { useState }  from "react";
import { Link } from "react-router-dom";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';




function DriverCard (props)  {
 

  
  
  return (
   
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                  <TableCell align="left">Code</TableCell>
                  <TableCell align="left">Drivername</TableCell>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.drivers.map((driver) => (
                <TableRow key={driver.id}>
                  
                  <TableCell component="th" scope="row">
                    {driver.driverCode}</TableCell>
                  <TableCell align="left">{driver.driverDescription}</TableCell>
                  <TableCell>      
                    <Link to={{ pathname: `/driver/edit` }}>
                    <i
                      className="edit alternate outline icon"
                      style={{ color: "blue", marginTop: "7px" }}
                      onClick = {() =>props.editRow(driver)}
                    ></i>
                    </Link>
                  </TableCell>
                  <TableCell>
                  <i
                    className="trash alternate outline icon"
                    style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
                    onClick={() => props.clickHandler(driver.id)} 
                  ></i>
                  </TableCell>
                </TableRow>
                ))}
              </TableBody>

            </Table>
          </TableContainer>
         
   
  );
};

export default DriverCard;
