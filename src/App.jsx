import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home/home.page";
import Best from "./pages/best/best.page";
import Demo from "./pages/demo/demo.page";
import Error404 from "./pages/error404/error404.page";

import ResponsiveAppBar from './components/responsiveappbar/responsiveappbar.component';
import Footer from "./components/footer/footer.component";

import ThemeProvider from './context/ThemeProvider';

import './App.scss';

const App = () => {
  return (
    <>
      <ThemeProvider>

        <ResponsiveAppBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home">{<Redirect to="/" />}</Route>
          <Route exact path="/best" component={Best} />
          <Route exact path="/demo" component={Demo} />
          <Route path="*" component={Error404} />
        </Switch>

        <Footer />
      </ThemeProvider>

    </>);
};

export default App;