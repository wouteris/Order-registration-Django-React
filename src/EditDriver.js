import React from "react";

class EditDriver extends React.Component {
  constructor(props) {
    super(props);
    const { id, driverCode, driverDescription } = props.driver.state.driver;
    this.state = {
      id,
      driverCode,
      driverDescription,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.driverCode === "" || this.state.driverDescription === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateDriverHandler(this.state);
    this.setState({ driverCode: "", driverDescription: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit driver</h2>
        <form className="ui form" onSubmit={this.update}>
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
            <label>driverDescription</label>
            <input
              type="text"
              name="driverDescription"
              placeholder="driverDescription"
              value={this.state.driverDescription}
              onChange={(e) => this.setState({ driverDescription: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditDriver;
