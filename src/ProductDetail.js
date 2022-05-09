import React from "react";
import { Link } from "react-router-dom";
import user from "./images/user.jpg";

const ProductDetail = (props) => {
  const { productCode, productDescription } = props.location.state.product;
  return (
    <div className="main">
      <div className="ui card centered">
      <div className="image">
      <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{productCode}</div>
          <div className="description">{productDescription}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Product List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
