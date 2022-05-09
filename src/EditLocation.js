import React from "react";

class EditLocation extends React.Component {
  constructor(props) {
    super(props);
    const { id, locationCode, locationDescription } = props.location.state.location;
    this.state = {
      id,
      locationCode,
      locationDescription,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.locationCode === "" || this.state.locationDescription === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateLocationHandler(this.state);
    this.setState({ locationCode: "", locationDescription: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit driver</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditLocation;
