import React, { useState, useEffect} from "react";
import axios from "axios";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectLocation(props) {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/locations`).then(res => {
      const persons = res.data;
      setPersons(  persons  );
    });
  }, [])

 
    return (
      <FormControl fullWidth>
      
      <Select
            name={props.name}
            value={props.value}
            labelID="SelectLocation-label"
            onChange={props.handleInputChange}
              >
              {persons.map((person) => (
              <MenuItem value={person.id} key={person.id}>
                {person.locationCode} {person.locationDescription}
              </MenuItem>
              ))}
              
      </Select>
      </FormControl>
    );
  
}
