import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import user from "./images/user.jpg";


function ProductDetail  (props) {
  const [product, setProduct] = useState(props.currentProduct)
  const history = useNavigate();
 
  
  useEffect(() => {

  setProduct(props.currentProduct)
  
  } , [ props ]); 


 
  return (
    <div className="main">
      <div className="ui card centered">
      <div className="image">
      <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">productname:  {product.productDescription}</div>
          <div className="description">productcode: {product.productCode} </div>
        </div>
      </div>
      <div className="center-div">
        
          <button onClick = {() =>history('/product')} className="ui button blue center">
            Back to product List
            
          </button>
        
      </div>
    </div>
  );
};

export default ProductDetail;
