// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196f3' }}>
      <Toolbar sx={{ justifyContent: 'space-around' }}>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'white' }}>
          Home
        </Typography>
        <Typography variant="h6" component={Link} to="/projects" sx={{ textDecoration: 'none', color: 'white' }}>
          Projects
        </Typography>
        <Typography variant="h6" component={Link} to="/about" sx={{ textDecoration: 'none', color: 'white' }}>
          About Me
        </Typography>
        {/* Add more links for navigation */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
