import * as React from 'react';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import user from "./images/user.jpg";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const OrderDetail = (props) => {
  const { orderID, shiftCode,shiftType, shiftDate, loadingDate, loadingTime, loadingLocationCode, loadingLocationPlace, loadingDriverCode, deliveryDate, deliveryTime, deliveryLocationCode, deliveryLocationPlace, deliveryDriverCode, carrierCode, productCode, quantity, orderRemarks, orderStatus, vehicleID } = props.location.state.order;
  return (
    <div className="main">
      <div className="ui card centered">
      <div className="image">
     
        </div>
        <div className="content">
          
        

          <Grid container direction="row" justifyContent = "flex-end" spacing={3}>
          <Grid item xs={12}>
          <Item><label>OrderID: </label>{orderID}</Item>
          </Grid>

            <Grid item xs={12}>
             <Item><label>Shiftcode: </label>{shiftCode}</Item>
           </Grid>
           
           <Grid item xs={12}>
            <Item><label>Shifttype: </label>{shiftType}</Item>
           </Grid>
           <Grid item xs={12}>
            <Item><label>Shiftdate: </label>{shiftDate}</Item>
           </Grid>
           <Grid item xs={12}>
            <Item><Divider /></Item>
           </Grid>
           <Grid item xs={12}>
            <Item><label><strong>Loading information</strong></label></Item>
           </Grid>
          <Grid item xs={12}>
            <Item><label>Date: </label>{loadingDate}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item><label>Time: </label>{loadingTime}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item><label>Locationcode: </label>{loadingLocationCode}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item><label>Locationplace: </label>{loadingLocationPlace}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item><label>Drivercode: </label>{loadingDriverCode}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item><Divider /></Item>
           </Grid>
           <Grid item xs={12}>
            <Item><label><strong>Delivery information</strong></label></Item>
           </Grid>
          <Grid item xs={12}>
            <Item><label>Date: </label>{deliveryDate}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item><label>Locationcode: </label>{deliveryLocationCode}</Item>
          </Grid>
          <Grid item xs={6}>
            <Item><label>Locationplace: </label>{deliveryLocationPlace}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item><label>Drivercode: </label>{deliveryDriverCode}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item><Divider /></Item>
           </Grid>
           <Grid item xs={12}>
            <Item><label><strong>Other information</strong></label></Item>
           </Grid>
          <Grid item xs={12}>
            <Item><label>Carriercode:</label>{carrierCode}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item><label>Productcode: </label>{productCode}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item><label>Quantity: </label>{quantity}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item><label>Remarks: </label>{orderRemarks}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item><label>Orderstatus: </label>{orderStatus}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item><label>vehicleID: </label>{vehicleID}</Item>
          </Grid>
          </Grid>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Order List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderDetail;
