import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {NavLink} from "react-router-dom";

import logo from "../../assets/brand/imagotipo.svg";
import "./responsiveappbar.styles.scss";

const pages = ['Best', 'Me'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (

    <AppBar position="fixed" color='color1'>
      <Container maxWidth="xl">
        <Toolbar disableGutters >

          {/* menu mobile */}



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }} >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">{page}</Typography> */}
                  <NavLink key={page} activeClassName="selected" exact to={page} className="menu-mobile">{page}</NavLink>
                </MenuItem>
              ))}

            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, height:'30px' }}>
            <NavLink exact to="/">
              <img src={logo} className='logo-bar' alt="" />
            </NavLink>
          </Box>

          {/* menu desk */}

          <Box sx={{ display: { xs: 'none', md: 'flex' }, margin:'1px', height:'50px' }}>
            <NavLink exact to="/">
              <img src={logo} className='logo-bar' alt="" />
            </NavLink>
          </Box>

          <Box className="menu" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              // <Button
              //   key={page}
              //   onClick={handleCloseNavMenu}
              //   sx={{ my: 2, color: 'white', display: 'block' }}
              // >
              //   {page}
              // </Button>
              <NavLink key={page} activeClassName="selected" exact to={page}>{page}</NavLink>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;