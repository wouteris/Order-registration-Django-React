import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  const inputEl = useRef("");
  const deleteProductHandler = (id) => {
    props.getProductId(id);
  };

 
  const renderProductList = props.products.map((product) => {
    return (
      <ProductCard
        product={product}
        clickHandler={deleteProductHandler}
        key={product.id}
      />
    );
  });
 


  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h2>
        Product List
        <Link to="add">
          <button className="ui button blue right">Add Product</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Products"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
      {renderProductList.length > 0
          ? renderProductList
          : "No products available"}
      </div>
    </div>
  );
};

export default ProductList;
