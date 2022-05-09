import React, { Component } from "react";
import Modal from "./components/ModalOrder";
import axios from "axios";



class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      orderList: [],
      modal: false,
      activeItem: {
        orderID: "",
        shiftCode: "",
        shiftType: "",
        loadingDate: "",
        loadingTime: "",
        loadingLocationCode: "",
        loadingLocationPlace: "",
        loadingDriverCode: "",
        deliveryDate: "",
        deliveryTime: "",
        deliveryLocationCode: "",
        deliveryDriverCode: "",
        carrierCode: "",
        productCode: "",
        quantity: "",
        orderRemarks: "",
        orderStatus: "",
        vehicleID: "",
        completed: false,
      },
    };
  }

  componentDidount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/orders/")
      .then((res) => this.setState({ orderList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    if (item.id) {
      axios
        .put(`/api/orders/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/orders/", item)
      .then((res) => this.refreshList());
    
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/orders/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { orderID: ""};

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }

    return this.setState({ viewCompleted: false });
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
      
      
      </div>
    );
  };

  renderItems = () => {
    
    const newItems = this.state.orderList.filter(
      (item) => item.id >= 0
    );

    return newItems.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`order-orderID mr-2 ${
            this.state.viewCompleted ? "completed-todo" : ""
          }`}
          orderID={item.orderID}
        >
          {item.orderID}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => this.editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary"
                  onClick={this.createItem}
                >
                  Add order
                </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default Order;