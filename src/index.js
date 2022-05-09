import React from 'react';
import ReactDOM from 'react-dom';
import OrderApp from './OrderApp';
import ProductApp from './ProductApp';
import Import from './import';
import LocationApp from './LocationApp'
import ShiftApp from './ShiftApp'
import VehicleApp from './VehicleApp'



ReactDOM.render(
  <React.StrictMode>
    <OrderApp  />
  </React.StrictMode>,
  document.getElementById('root')
);

