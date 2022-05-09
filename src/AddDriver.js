import React from "react";

class AddDriver extends React.Component {
  state = {
    driverCode: "",
    driverDescription: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.driverCode === "" || this.state.driverDescription === "") {
      alert("All the fields are mandatory!");
      return;
    }
  
    this.props.addOrderHandler(this.state);
    
    this.setState({ driverCode: "", driverDescription: "" });
    this.props.history.push("/");
    
  };


  render() {
    return (
      <div className="ui main">
        <h2>Add driver</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>driverCode</label>
            <input
              type="text"
              name="driverCode"
              placeholder="driverCode"
              value={this.state.driverCode}
              onChange={(e) => this.setState({ driverCode: e.target.value })}
            />
          </div>
          <div className="field">
            <label>loadingDate</label>
            <input
              type="text"
              name="driverDescription"
              placeholder="driverDescription"
              value={this.state.driverDescription}
              onChange={(e) => this.setState({ driverDescription: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddDriver;
