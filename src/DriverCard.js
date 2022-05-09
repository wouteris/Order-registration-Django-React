import React from "react";
import { Link } from "react-router-dom";


const ProductCard = (props) => {
  const { id, productCode, productDescription } = props.product;
  return (
    <div className="item">
      
      <div className="content">
        <Link
          to={{ pathname: `/product/${id}`, state: { product: props.product } }}
        >
          <div className="header">{productCode}</div>
          <div>{productDescription}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)} 
      ></i>
      <Link to={{ pathname: `/edit`, state: { product: props.product } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ProductCard;
