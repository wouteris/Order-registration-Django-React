import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { BrowserRouter as Router, Routes, Link, BrowserRouter } from "react-router-dom";


export default function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

 

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
        {auth && (
          <div>
            <IconButton
            size="large"
            color="inherit"
            aria-controls="menu-appbar"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleMenu}
          
            
            >
            <MenuIcon />
            
          </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={ Link } to="/Driver">Driver</MenuItem>
                <MenuItem component={ Link } to="/Location">Location</MenuItem>
                <MenuItem component={ Link } to="/Product">Product</MenuItem>
                <MenuItem component={ Link } to="/Shift">Shift</MenuItem>
                <MenuItem component={ Link } to="/Vehicle">Vehicle</MenuItem>
                <MenuItem component={ Link } to="/Order">Order</MenuItem>
              </Menu>
          </div>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Order registration
          </Typography>
          {auth && (
            <div>
      

            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}