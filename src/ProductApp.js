import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import api from "./api/products";
import "./App.css";
import Header from "./Header";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import ProductDetail from "./ProductDetail";
import EditProduct from "./EditProduct";
import axios from "axios";

function ProductApp() {
  const LOCAL_STORAGE_KEY = "products";
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //RetrieveProducts
  const retrieveProducts =  async () => {
    const response = await axios.get("api/products");
    return response.data;
  };

  const addProductHandler = async (product) => {
    console.log(product);
   const request = {
     ...product
   };
    const response = await axios.post("/api/products/", request);
    setProducts([...products, response.data]);
  };

  const updateProductHandler = async (product) => {
    const response = await axios.put(`/api/products/${product.id}/`, product);
    const { id, productCode, productDescription } = response.data;
    setProducts(
      products.map((product) => {
        return product.id === id ? { ...response.data } : product;
      })
    );
  };

  const removeProductHandler = async (id) => {
    await axios.delete(`/api/products/${id}`);
    const newProductList = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(newProductList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newProductList = products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newProductList);
    } else {
      setSearchResults(products);
    }
  };

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await retrieveProducts();
      if (allProducts) setProducts(allProducts);
    };

    getAllProducts();
  }, []);

  return (
    <div>
    <div className="ui container">
      
     
        
        <Routes>
          <Route
            path="/"
            element={<ProductList
               
                products={searchTerm.length < 1 ? products : searchResults}
                getProductId={removeProductHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="add"
            element={<AddProduct  addProductHandler={addProductHandler} />
            }
          />

          <Route
            path="edit"
            element={<EditProduct
              
                updateProductHandler={updateProductHandler}
              />
            }
          />

          <Route path="/product/:id" component={ProductDetail} />
        </Routes>
     
    </div>
    </div>
    );
}

export default ProductApp;
