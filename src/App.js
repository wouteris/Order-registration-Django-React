import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LocationApp from './LocationApp';
import ProductApp from './ProductApp';
import ShiftApp from './ShiftApp';
import OrderApp from './OrderApp';
import VehicleApp from './VehicleApp';
import DriverApp from './DriverApp';
import Header from './Header';
import AddLocation from './AddLocation';


const Home = () => (
  <div>
    <p>We are now on the HOME page</p>
  </div>
)




const App = () => (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path = "/"  element={<Home />} />
    <Route path="/Location/*" element={<LocationApp />}/>
      
    
    <Route
      path="/Product/*"
      
      element={<ProductApp
          
          
        />
      }
    />
     <Route
      path="/Shift/*"
      
      element={<ShiftApp
          
          
        />
      }
    />
    <Route
      path="/Driver/*"
      
      element={<DriverApp
          
          
        />
      }
    />
    <Route
      path="/Vehicle/*"
      
      element={<VehicleApp
          
          
        />
      }
    />
    <Route
      path="/Order/*"
      
      element={<OrderApp
          
          
        />
      }
    />
 
  </Routes>
</BrowserRouter>
)
export default App