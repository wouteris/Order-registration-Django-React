import React from "react";

class AddShift extends React.Component {
  state = {
    shiftCode: "",
    shiftDescription: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.shiftCode === "" || this.state.shiftDescription === "") {
      alert("All the fields are mandatory!");
      return;
    }
  
    this.props.addShiftHandler(this.state);
    
    this.setState({ shiftCode: "", shiftDescription: "" });
    this.props.history.push("/");
    
  };


  render() {
    return (
      <div className="ui main">
        <h2>Add shift</h2>
        <form className="ui form" onSubmit={this.add}>
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
            <label>loadingDate</label>
            <input
              type="text"
              name="shiftDescription"
              placeholder="shiftDescription"
              value={this.state.shiftDescription}
              onChange={(e) => this.setState({ shiftDescription: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddShift;
