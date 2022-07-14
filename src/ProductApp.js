import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import ProductDetail from "./ProductDetail";
import EditProduct from "./EditProduct";
import axios from "axios";

function ProductApp() {
  
  //Setting state
  const initialFormState = {id: null, productCode: '', productDescription: ''}
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  
  //API to products table
  const productsData = async () => {
    const response = await axios.get("api/products");
    return response.data;
  };
  
  
  //CRUD operations
  const addProduct = async product => {

    const request = {
      ...product
    };
     console.log("Test",request);
    const response = await axios.post("/api/products/", request);
      console.log(response);

    
		setProducts([ ...products, response.data ])
	}
  const updateProduct = async (id, updatedProduct) => {
    const response = await axios.put(`/api/products/${id}/`, updatedProduct);

		setEditing(false)

    setProducts(products.map(product => (product.id === id ? updatedProduct: product)))
	}
 
  const editRow = product => {
    setEditing(true)
    setCurrentProduct({id: product.id, productCode: product.productCode, productDescription: product.productDescription})
  }

  const removeProductHandler = async (id) => {
    await axios.delete(`/api/products/${id}`);
    const newproductList = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(newproductList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newproductList = products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newproductList);
    } else {
      setSearchResults(products);
    }
  };

  useEffect(() => {
    const getAllproducts = async () => {
      const allproducts = await productsData();
      if (allproducts) setProducts(allproducts);
    };

    getAllproducts();
  }, []);



  return (
    <div>
    <div className="ui container">
      
     
      
        <Routes>
          <Route
            path="/"
            exact
            element={<ProductList
                
                
                products={searchTerm.length < 1 ? products : searchResults}
                getproductId={removeProductHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
                editing={editing}
								setEditing={setEditing}
								currentProduct={currentProduct}
								updateProduct={updateProduct}
                editRow={editRow}
                productsData={productsData}
                
                
                
              />
            }
          />
          <Route
            path="add"
            element={<AddProduct  
              addProduct={addProduct}
              />
            }
          />

          <Route
            path="edit"
            element={<EditProduct
                state={{products}}
                
                editing={editing}
								setEditing={setEditing}
								currentProduct={currentProduct}
								updateProduct={updateProduct}
                
                
              />
            }
          />

          <Route path=":id" element={<ProductDetail
                currentProduct={currentProduct}
                products={products}
                
          /> }
          />
        </Routes>
      
    </div>
    </div>
    );
}

export default ProductApp;
