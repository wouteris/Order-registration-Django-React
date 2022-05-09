import React from "react";

class EditVehicle extends React.Component {
  constructor(props) {
    super(props);
    const { id, vehicleCode, vehicleDescription } = props.location.state.vehicle;
    this.state = {
      id,
      vehicleCode,
      vehicleDescription,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.vehicleCode === "" || this.state.vehicleDescription === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateVehicleHandler(this.state);
    this.setState({ vehicleCode: "", vehicleDescription: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit vehicle</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditVehicle;
