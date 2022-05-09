import React from "react";

class EditShift extends React.Component {
  constructor(props) {
    super(props);
    const { id, shiftCode, shiftDescription } = props.location.state.shift;
    this.state = {
      id,
      shiftCode,
      shiftDescription,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.shiftCode === "" || this.state.shiftDescription === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateShiftHandler(this.state);
    this.setState({ shiftCode: "", shiftDescription: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Shift</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>shiftCode</label>
            <input
              type="text"
              name="shiftCode"
              placeholder="shiftCode"
              value={this.state.shiftCode}
              onChange={(e) => this.setState({ shiftCode: e.target.value })}
            />
          </div>
          <div className="field">
            <label>shiftDescription</label>
            <input
              type="text"
              name="shiftDescription"
              placeholder="shiftDescription"
              value={this.state.shiftDescription}
              onChange={(e) => this.setState({ shiftDescription: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditShift;
