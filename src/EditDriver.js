import React from "react";

class EditOrder extends React.Component {
  constructor(props) {
    super(props);
    const { id, driverCode, driverDescription } = props.location.state.order;
    this.state = {
      id,
      driverCode,
      driverDescription,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.orderID === "" || this.state.orderID === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateOrderHandler(this.state);
    this.setState({ orderID: "", loadingDate: "" });
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
              name="orderID"
              placeholder="orderID"
              value={this.state.orderID}
              onChange={(e) => this.setState({ orderID: e.target.value })}
            />
          </div>
          <div className="field">
            <label>driverDescription</label>
            <input
              type="text"
              name="orderID"
              placeholder="orderID"
              value={this.state.orderID}
              onChange={(e) => this.setState({ orderID: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditOrder;