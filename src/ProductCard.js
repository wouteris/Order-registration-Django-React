import React from "react";
import { Link } from "react-router-dom";


function ProductCard (props)  {

  
  
  return (
    
    <div className="item">
      
      <div className="content">
        
        <Link
          to={{ pathname: `/product/${props.product.id}` } } onClick = {() =>props.editRow(props.product)}>
          
          <div className="header">{props.product.productCode}</div>
          <div>{props.product.productDescription}</div>
          <div>{props.product.id}</div>
          
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(props.product.id)} 
      ></i>
      <Link to={{ pathname: `/product/edit` }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
          onClick = {() =>props.editRow(props.product)}
        ></i>
      </Link>
    </div>
  );
};

export default ProductCard;
