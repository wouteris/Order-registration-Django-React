import React from "react";

class AddLocation extends React.Component {
  state = {
    locationCode: "",
    locationDescription: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.locationCode === "" || this.state.locationDescription === "") {
      alert("All the fields are mandatory!");
      return;
    }
  
    this.props.addLocationHandler(this.state);
    
    this.setState({ locationCode: "", locationDescription: "" });
    this.props.history.push("/");
    
  };


  render() {
    return (
      <div className="ui main">
        <h2>Add Location</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>locationCode</label>
            <input
              type="text"
              name="locationCode"
              placeholder="locationCode"
              value={this.state.locationCode}
              onChange={(e) => this.setState({ locationCode: e.target.value })}
            />
          </div>
          <div className="field">
            <label>locationDescription</label>
            <input
              type="text"
              name="locationDescription"
              placeholder="locationDescription"
              value={this.state.locationDescription}
              onChange={(e) => this.setState({ locationDescription: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddLocation;
