import React from "react";
import axios from "axios";

export default class ShiftList extends React.Component {
  state = {
    shifts: []
  };

  componentDidMount() {
    axios.get("/api/shifts/").then(res => {
      const shifts = res.data;
      this.setState({ shifts });
    });
  }

  render() {
    return (
      <select>
       {this.state.shifts.map(shift => <option>{shift.shiftCode}</option>)}
      </select>
    );
  }
}