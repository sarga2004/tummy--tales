import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

import { FaEnvelope, FaHome, FaInfoCircle, FaList, FaUser } from 'react-icons/fa';

const NavBar = () => {
    return (
     <AppBar position="fixed" className="navbar" elevation={1}
     sx={{backgroundColor:'#fff0f0',color:'#333'}}>
        <Toolbar className="toolbar">
            <Box className="logo" >
            Tummy <span> Tales</span> </Box>
            <ul className="nav-links">
                <li>
                    <Link to='/h'>
                        <FaHome/>Home</Link>
                
            </li>
            <li>
                <Link to='/c'>
                    <FaList />Categories</Link>
            </li>
            <li>

                <Link to='/a'>
                    <FaInfoCircle />About</Link>
            </li>
            <li>

                <Link to='/con'>
                    <FaEnvelope />Contact</Link>
            </li>
            <li>

                <Link to='/p'>
                    <FaUser />Profile</Link>
            </li>

             <li>

                <Link to='/dashboard'>
                    <FaUser />dashboard</Link>
            </li>
            
        </ul>


         </Toolbar>
     </AppBar>
        
  )
}

export default NavBar;