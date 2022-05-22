import React from "react";
// import ReactDOM from 'react-dom';
// import Button from '@mui/material/Button';

import Home from "./pages/home/home.component";
// import About from "./pages/about/about.components";
import Best from "./pages/best/best.component";
// import Chile from "./pages/chile/chile.components";
import Me from "./pages/me/me.component";
import Error404 from "./pages/error404/error404.component";

// import Menu from "./components/menu/menu.component";

import {Route, Switch } from "react-router-dom";

import './App.css';
import ResponsiveAppBar from './components/responsiveappbar/responsiveappbar.component';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'


import Footer from "./components/footer/footer.component";

const App = () => {
  return <>
    <ResponsiveAppBar/>


    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/home">{<Redirect to="/" />}</Route> */}
      <Route exact path="/best" component={Best} />
      {/* <Route exact path="/best" component={Best} /> */}
      {/* <Route exact path="/chile" component={Chile} /> */}
      <Route exact path="/me" component={Me} />
      <Route path="*" component={Error404} />
      {/* <Route exact path="/extra" children={<p>soy algo extra</p>} /> */}
    </Switch>

    <Footer/>
    
  </>;
};

export default App;
