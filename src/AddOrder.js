import React from "react";

class AddOrder extends React.Component {
  state = {
    orderID: "",
    loadingDate: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.orderID === "" || this.state.loadingDate === "") {
      alert("All the fields are mandatory!");
      return;
    }
  
    this.props.addOrderHandler(this.state);
    
    this.setState({ orderID: "", loadingDate: "" });
    this.props.history.push("/");
    
  };


  render() {
    return (
      <div className="ui main">
        <h2>Add Order</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>orderID</label>
            <input
              type="text"
              name="orderID"
              placeholder="orderID"
              value={this.state.orderID}
              onChange={(e) => this.setState({ orderID: e.target.value })}
            />
          </div>
          <div className="field">
            <label>loadingDate</label>
            <input
              type="text"
              name="loadingDate"
              placeholder="loadingDate"
              value={this.state.loadingDate}
              onChange={(e) => this.setState({ loadingDate: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddOrder;
