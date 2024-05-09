import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';

const MenuAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontStyle: 'italic' }}>
          Space X
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '80px' }}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
            <AccountCircle sx={{ fontSize: '35px' }}/>
            <Typography variant="subtitle1">
              Akshay
            </Typography>
          </div>
          <div>
            <IconButton
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon sx={{ fontSize: '30px' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;
