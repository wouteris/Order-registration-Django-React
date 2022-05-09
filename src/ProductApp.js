import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
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

    //console.log(uuid());
   const request = {
   //   id: uuid(),
   //...product,
     //id: 2,
     ...product,
     //productCode: this.state.productCode,
    //productDescription:"NU"
   };
    console.log(request);
    const response = await axios.post("/api/products/", request);
    console.log(response);
    setProducts([...products, response.data]);

    
   
    
  };

  const addProducts = {
    id: 2,
    productCode: "NU",
    productDescription: "NU",
  }
  api.post('api/products', addProducts)
  .then(res => console.log(res.data));
  

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
    // const retriveProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveProducts) setProducts(retriveProducts);
    const getAllProducts = async () => {
      const allProducts = await retrieveProducts();
      if (allProducts) setProducts(allProducts);
    };

    getAllProducts();
  }, []);

  //useEffect(() => {
  //  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  //}, [products]);

  return (
    <div>
    <div className="ui container">
      
      <Router>
       <Header /> 
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ProductList
                {...props}
                products={searchTerm.length < 1 ? products : searchResults}
                getProductId={removeProductHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddProduct {...props} addProductHandler={addProductHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditProduct
                {...props}
                updateProductHandler={updateProductHandler}
              />
            )}
          />

          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
    </div>
    );
}

export default ProductApp;
