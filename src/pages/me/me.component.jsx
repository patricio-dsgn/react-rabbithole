import React from "react";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Grid'
import Typography from '@mui/material/Typography'



const Me = () => {
  return <>
  
    <Grid container spacing={0} mt={8}>

      <Grid item xs={12} sm={8} md={9}>
        <Box border={2}>
          
          <Typography m={3} variant="h2" component="h1">API integrada con ReactJS</Typography>
          
          
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi nisi dolorum est quos eaque debitis tenetur reprehenderit corporis. Numquam nobis quos explicabo ducimus perferendis asperiores, nemo eligendi quibusdam nostrum necessitatibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus enim esse saepe id nihil fugit nesciunt itaque error, ipsum sunt. Porro at molestiae, voluptatem ex natus alias. Iure, impedit cumque?
        </Box>
      </Grid>


      <Grid item xs={12} sm={4} md={3}>
        
        <Box 
          m={3} 
          p={3}
          border={1} 
          borderRadius={2} 
          borderColor='#ff0077' 
          boxShadow='2px 2px 2px 2px rgba(0,0,0,0.3)'>

          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum rem, consequatur suscipit vitae eius est voluptas et quos eos asperiores recusandae eum ad molestiae quod earum? Dolorem, necessitatibus commodi?
        </Box>
      </Grid>

      
    </Grid>


    </>;
};

export default Me;
