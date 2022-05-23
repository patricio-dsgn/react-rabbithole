import React from "react";
// import ReactDOM from 'react-dom';
// import Button from '@mui/material/Button';

import Home from "./pages/home/home.page";
import Best from "./pages/best/best.page";
import Me from "./pages/me/me.page";
import About from "./pages/about/about.page";
import Error404 from "./pages/error404/error404.page";

// import Menu from "./components/menu/menu.component";

import {Route, Switch, Redirect } from "react-router-dom";

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
      <Route exact path="/home">{<Redirect to="/" />}</Route>

      <Route exact path="/best" component={Best} />
      {/* <Route exact path="/chile" component={Chile} /> */}

      <Route exact path="/me" component={Me} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/about">{<Redirect to={About} />}</Route> */}
      <Route path="*" component={Error404} />
      {/* <Route exact path="/extra" children={<p>soy algo extra</p>} /> */}
    </Switch>

    <Footer/>
    
  </>;
};

export default App;
