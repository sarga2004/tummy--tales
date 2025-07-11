// src/components/AdminLayout.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
          <Button color="inherit" component={Link} to="/admin/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/admin/messages">Messages</Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default AdminLayout;
