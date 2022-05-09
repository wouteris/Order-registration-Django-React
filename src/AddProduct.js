import React from "react";

class AddProduct extends React.Component {
  state = {
    productCode: "",
    productDescription: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.productCode === "" || this.state.productDescription === "") {
      alert("All the fields are mandatory!");
      return;
    }
  
    this.props.addProductHandler(this.state);
    
    this.setState({ productCode: "", productDescription: "" });
    this.props.history.push("/");
    
  };


  render() {
    return (
      <div className="ui main">
        <h2>Add Product</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>productCode</label>
            <input
              type="text"
              name="productCode"
              placeholder="productCode"
              value={this.state.productCode}
              onChange={(e) => this.setState({ productCode: e.target.value })}
            />
          </div>
          <div className="field">
            <label>productDescription</label>
            <input
              type="text"
              name="productDescription"
              placeholder="productDescription"
              value={this.state.productDescription}
              onChange={(e) => this.setState({ productDescription: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
