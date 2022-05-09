import React from "react";

class AddVehicle extends React.Component {
  state = {
    vehicleCode: "",
    vehicleDescription: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.vehicleCode === "" || this.state.vehicleDescription === "") {
      alert("All the fields are mandatory!");
      return;
    }
  
    this.props.addVehicleHandler(this.state);
    
    this.setState({ vehicleCode: "", vehicleDescription: "" });
    this.props.history.push("/");
    
  };


  render() {
    return (
      <div className="ui main">
        <h2>Add vehicle</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>vehicleCode</label>
            <input
              type="text"
              name="vehicleCode"
              placeholder="vehicleCode"
              value={this.state.vehicleCode}
              onChange={(e) => this.setState({ vehicleCode: e.target.value })}
            />
          </div>
          <div className="field">
            <label>vehicleDescription</label>
            <input
              type="text"
              name="vehicleDescription"
              placeholder="vehicleDescription"
              value={this.state.vehicleDescription}
              onChange={(e) => this.setState({ vehicleDescription: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddVehicle;
