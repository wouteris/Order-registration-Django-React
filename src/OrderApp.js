import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import OrderList from "./OrderList";
import AddOrder from "./AddOrder";
import OrderDetail from "./OrderDetail";
import EditOrder from "./EditOrder";
import axios from "axios";

function OrderApp() {
  
  //Setting state
  const initialFormState = 
  {
    id: null, 
    orderID: '', 
    shiftCode: '',
    shiftType: '',
    shiftDate: '',
    loadingDate: '',
    loadingTime: '',
    loadingLocation: 17,
    loadingDriverCode: '',
    deliveryDate: '',
    deliveryTime: '',
    deliveryLocation: '',
    deliverDriverCode: '',
    carrierCode: '',
    productCode: '',
    quantity: '',
    orderRemarks: '',
    orderStatus: '',
    vehicleID: ''
  }

  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  
  //API to orders table
  const ordersData = async () => {
    const response = await axios.get("api/orders");
    return response.data;
  };
  
  
  //CRUD operations
  const addOrder = async order => {

    const request = {
      ...order
    };
     console.log("Test",request);
    const response = await axios.post("/api/orders/", request);
      console.log(response);

    
		setOrders([ ...orders, response.data ])
	}
  const updateOrder = async (id, updatedOrder) => {
    const response = await axios.put(`/api/orders/${id}/`, updatedOrder);

		setEditing(false)

    setOrders(orders.map(order => (order.id === id ? updatedOrder: order)))
	}
 
  const editRow = order => {
    setEditing(true)
    setCurrentOrder({
      id: order.id, 
      orderID: order.orderID, 
      shiftCode: order.shiftCode, 
      shiftType: order.shiftType,
      shiftDate: order.shiftDate,
      loadingDate: order.loadingDate,
      loadingTime: order.loadingTime,
      loadingLocation: order.loadingLocation,
      loadingDriverCode: order.loadingDriverCode,
      deliveryDate: order.deliveryDate,
      deliveryTime: order.deliveryTime,
      deliveryLocation: order.deliveryLocation,
      deliveryDriverCode: order.deliveryDriverCode,
      quantity: order.quantity
    })
  }

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
    const getAllOrders = async () => {
      const allorders = await ordersData();
      if (allorders) setOrders(allorders);
    };

    getAllOrders();
  }, []);



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
                editing={editing}
								setEditing={setEditing}
								currentOrder={currentOrder}
								updateOrder={updateOrder}
                editRow={editRow}
                ordersData={ordersData}
                
                
                
              />
            }
          />
          <Route
            path="add"
            element={<AddOrder  
              addOrder={addOrder}
              />
            }
          />

          <Route
            path="edit"
            element={<EditOrder
                state={{orders}}
                
                editing={editing}
								setEditing={setEditing}
								currentOrder={currentOrder}
								updateOrder={updateOrder}
                
                
              />
            }
          />

          <Route path=":id" element={<OrderDetail
                currentOrder={currentOrder}
                orders={orders}
                
          /> }
          />
        </Routes>
      
    </div>
    </div>
    );
}

export default OrderApp;
