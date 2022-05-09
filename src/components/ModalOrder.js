import React, { Component } from "react";
import ShiftList from "./shiftcode-list.js";
import LocationList from "./location-list.js";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";



export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

 


  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;
    
   
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Order</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="order-orderID">orderID</Label>
              <Input
                type="text"
                id="order-orderID"
                name="orderID"
                value={this.state.activeItem.orderID}
                onChange={this.handleChange}
                placeholder="Enter orderID"
              />
              <Label for="order-shiftCode">shiftCode</Label>
      	      <div>
               
               <ShiftList />
              </div>
             
             
              <FormControl fullWidth>
              <InputLabel id="shiftType">shiftType</InputLabel>
              <Select
               labelId="label-shiftType"
               id="shiftType"
               value={this.state.activeItem.shiftType}
               label="shiftType"
               onChange={this.handleChange}
                >
                <MenuItem value={1}>Day</MenuItem>
                <MenuItem value={2}>Night</MenuItem>
               </Select>
              </FormControl>
              <Input
                type="date"
                id="order-shiftDate"
                name="shiftDate"
                value={this.state.activeItem.shiftDate}
                onChange={this.handleChange}
                placeholder="Enter shiftDate"
              />
              <Label for="order-loadingDate">loadingDate</Label>
              <Input
                type="date"
                id="order-loadingDate"
                name="loadingDate"
                value={this.state.activeItem.loadingDate}
                onChange={this.handleChange}
                placeholder="Enter loadingDate"
              />
              <Label for="order-loadinTime">loadingTime</Label>
              <Input
                type="text"
                id="order-loadingTime"
                name="loadingTime"
                value={this.state.activeItem.loadingTime}
                onChange={this.handleChange}
                placeholder="Enter loadinTime"
              />
              <Label for="order-shiftCode">loadingLocationCode</Label>
      	      <div>
               
               <LocationList />
              </div>
              <Label for="order-loadingLocationPlace">loadingLocationPlace</Label>
              <Input
                type="text"
                id="order-loadingLocationPlace"
                name="shiftCode"
                value={this.state.activeItem.shiftCoe}
                onChange={this.handleChange}
                placeholder="Enter shiftCode"
              />
              <Label for="order-loadingDriverCode">loadingDriverCode</Label>
              <Input
                type="text"
                id="order-loadingDriverCode"
                name="loadingDriverCode"
                value={this.state.activeItem.loadingDriverCode}
                onChange={this.handleChange}
                placeholder="Enter loadingDriverCode"
              />
              <Label for="order-deliveryDate">deliveryDate</Label>
              <Input
                type="date"
                id="order-deliveryDate"
                name="deliveryDate"
                value={this.state.activeItem.shiftCoe}
                onChange={this.handleChange}
                placeholder="Enter deliveryDate"
              />
              <Label for="order-deliveryTime">deliveryTime</Label>
              <Input
                type="text"
                id="order-deliveryTime"
                name="deliveryTime"
                value={this.state.activeItem.shiftCoe}
                onChange={this.handleChange}
                placeholder="Enter deliveryTime"
              />
              <Label for="order-deliveryLocationCode">deliveryLocationCode</Label>
              <Input
                type="text"
                id="order-deliveryLocationCode"
                name="deliveryLocationCode"
                value={this.state.activeItem.shiftCoe}
                onChange={this.handleChange}
                placeholder="Enter deliveryLocationCode"
              />
                <Label for="order-deliveryDriverCode">deliveryDriverCode</Label>
              <Input
                type="text"
                id="order-deliveryDriverCode"
                name="deliveryDriverCode"
                value={this.state.activeItem.shiftCoe}
                onChange={this.handleChange}
                placeholder="Enter deliveryDriverCode"
              />
                <Label for="order-carrierCode">carrierCode</Label>
              <Input
                type="text"
                id="order-carrierCode"
                name="carrierCode"
                value={this.state.activeItem.shiftCoe}
                onChange={this.handleChange}
                placeholder="Enter carrierCode"
              />
                <Label for="order-productCode">productCode</Label>
              <Input
                type="text"
                id="order-productCode"
                name="productCode"
                value={this.state.activeItem.shiftCoe}
                onChange={this.handleChange}
                placeholder="Enter productCode"
              />
                <Label for="order-quantity">quantity</Label>
              <Input
                type="text"
                id="order-quantity"
                name="quantity"
                value={this.state.activeItem.shiftCoe}
                onChange={this.handleChange}
                placeholder="Enter quantity"
              />
                <Label for="order-orderRemarks">orderRemarks</Label>
              <Input
                type="text"
                id="order-orderRemarks"
                name="orderRemarks"
                value={this.state.activeItem.shiftCoe}
                onChange={this.handleChange}
                placeholder="Enter orderRemarks"
              />
                <Label for="order-orderStatus">orderStatus</Label>
              <Input
                type="text"
                id="order-orderStatus"
                name="orderStatus"
                value={this.state.activeItem.shiftCoe}
                onChange={this.handleChange}
                placeholder="Enter orderStatus"
              />
                <Label for="order-vehicleID">vehicleID</Label>
              <Input
                type="text"
                id="order-vehicleID"
                name="vehicleID"
                value={this.state.activeItem.vehicleID}
                onChange={this.handleChange}
                placeholder="Enter vehicleID"
              />
            
              

            </FormGroup>
           
           
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}