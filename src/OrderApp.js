import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import api from "./api/products";
import "./App.css";
import Header from "./Header";
import OrderList from "./OrderList";
import AddOrder from "./AddOrder";
import OrderDetail from "./OrderDetail";
import EditOrder from "./EditOrder";
import axios from "axios";

function OrderApp() {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  //RetrieveProducts
  const retrieveOrders =  async () => {
    const response = await axios.get("api/orders");
    return response.data;
  };

  const addOrderHandler = async (order) => {
    console.log(order);

    //console.log(uuid());
   const request = {
   //   id: uuid(),
   //...product,
     //id: 2,
     ...order,
     //productCode: this.state.productCode,
    //productDescription:"NU"
   };
    console.log(request);
    const response = await axios.post("/api/orders/", request);
    console.log(response);
    setOrders([...orders, response.data]);

    
   
    
  };

  

  const updateOrderHandler = async (order) => {
    const response = await axios.put(`/api/orders/${order.id}/`, order);
    const { id, orderID, loadingDate } = response.data;
    setOrders(
      orders.map((order) => {
        return order.id === id ? { ...response.data } : order;
      })
    );
  };

  const removeOrderHandler = async (id) => {
    await axios.delete(`/api/orders/${id}`);
    const newOrderList = orders.filter((order) => {
      return order.id !== id;
    });

    setOrders(newOrderList);
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newOrderList = orders.filter((order) => {
        return Object.values(order)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newOrderList);
    } else {
      setSearchResults(orders);
    }
  };

  useEffect(() => {
    // const retriveProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveProducts) setProducts(retriveProducts);
    const getAllOrders = async () => {
      const allOrders = await retrieveOrders();
      if (allOrders) setOrders(allOrders);
    };

    getAllOrders();
  }, []);

  //useEffect(() => {
  //  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  //}, [products]);

  return (
    <div>
    <div className="ui container">
      
      
       
        <Routes>
          <Route
            path="/"
            exact
            element={<OrderList
                
                orders={searchTerm.length < 1 ? orders : searchResults}
                getOrderId={removeOrderHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="add"
            element={<AddOrder addOrderHandler={addOrderHandler} />
            }
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditOrder
                {...props}
                updateOrderHandler={updateOrderHandler}
              />
            )}
          />

          <Route path="/order/:id" component={OrderDetail} />
        </Routes>
     
    </div>
    </div>
    );
}

export default OrderApp;
