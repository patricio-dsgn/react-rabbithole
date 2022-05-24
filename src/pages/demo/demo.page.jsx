import React from "react";

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import DemoApp from "../../components/demoapp/demoapp.component";
import Error from "../../components/error/error.component";

import "./demo.styles.scss"

const Demo = () => {

  return (
    <div className="page-me">

      <Grid container justifyContent={'center'} p={3}>

        <Grid item xs={12} pt={30} align="center">
          <Typography m={3} sx={{ fontSize: { md: 60, sm: 50, xs: 40 } }} variant="h2" component="h1" color="#fff">Podedex creada con pokeapi</Typography>
        </Grid>

        <Error>
          <DemoApp />
        </Error>

      </Grid>
    </div>
  );
};

export default Demo;