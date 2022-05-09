import React from "react";

class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    const { id, productCode, productDescription } = props.location.state.product;
    this.state = {
      id,
      productCode,
      productDescription,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.productCode === "" || this.state.productDescription === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateProductHandler(this.state);
    this.setState({ productCode: "", productDescription: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Product</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditProduct;
