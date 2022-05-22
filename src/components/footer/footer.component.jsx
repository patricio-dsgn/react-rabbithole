import React from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'


// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import {Link} from "react-router-dom";

import {ReactComponent as Isotipo} from "../../assets/brand/isotipo.svg";

import "./footer.styles.scss";


const Footer = () => {
  return (
    <footer>


      <Grid container spacing={0} marginTop={1} marginBottom={1} >
        <Grid item xs={12} md={8} padding={1} sx={{border:'1px solid #00f', backgroundColor: '#f07'}}>
          <p>vsdvsd</p> 
        </Grid>

        <Grid item xs={12} md={4} sx={{border:'1px solid #00f', backgroundColor: '#f70'}}> 
          <Isotipo width="70%" height="70%"/>
        </Grid>

      </Grid>





      <p color='color1'>© 2022</p>

    <nav>
      {/* <Btn size="btn-s" txt="youtube"/>
      <Btn size="btn-m" txt="twitter"/>
      <Btn size="btn-s" txt="facebook"/>
      <Btn size="btn-l" txt="instagram"/> */}
    </nav>

  </footer>
  
  )
};

export default Footer;












// const pages = ['Best', 'Me'];


// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };



//   return (

//     <AppBar position="static" color='color1'>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>

//           {/* menu mobile */}



//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit">
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}>
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}

//             </Menu>
//           </Box>


//           <Box sx={{ display: { xs: 'flex', md: 'none' }, height:'30px' }}>
//             <NavLink exact to="/">
//               <img src={logo} className='logo-bar' alt="" />
//             </NavLink>
//           </Box>

//           {/* menu desk */}

//           <Box sx={{ display: { xs: 'none', md: 'flex' }, margin:'1px', height:'50px' }}>
//             <NavLink exact to="/">
//               <img src={logo} className='logo-bar' alt="" />
//             </NavLink>
//           </Box>

//           <Box className="menu" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               // <Button
//               //   key={page}
//               //   onClick={handleCloseNavMenu}
//               //   sx={{ my: 2, color: 'white', display: 'block' }}
//               // >
//               //   {page}
//               // </Button>
//               <NavLink key={page} activeClassName="selected" exact to={page}>{page}</NavLink>
//             ))}
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;


