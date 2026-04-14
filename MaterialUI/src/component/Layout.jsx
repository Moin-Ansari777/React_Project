import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, AppBar as MuiAppBar, styled } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const drawerWidth = 240;

// 1. Force the Navbar to stay on top of the Sidebar
const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1, 
}));

export default function Layout() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Navbar stays fixed at the top */}
      <AppBar position="fixed">
        <Navbar onMenuClick={toggleDrawer} />
      </AppBar>

      {/* Sidebar starts BELOW the Navbar */}
      <Sidebar open={open} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* 2. This empty Toolbar pushes your content below the fixed Navbar */}
        <Toolbar /> 
        <h1>Main Content Area</h1>
        <p>This content is now correctly aligned.</p>
      </Box>
    </Box>
  );
}
