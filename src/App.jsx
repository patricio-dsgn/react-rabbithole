import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home/home.page";
import Best from "./pages/best/best.page";
import Me from "./pages/me/me.page";
import Error404 from "./pages/error404/error404.page";

import ResponsiveAppBar from './components/responsiveappbar/responsiveappbar.component';
import Footer from "./components/footer/footer.component";

import './App.css';

const App = () => {
  return (
    <>
      <ResponsiveAppBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home">{<Redirect to="/" />}</Route>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/best" component={Best} />
          <Route exact path="/me" component={Me} />
        </Suspense>
        <Route path="*" component={Error404} />
      </Switch>

      <Footer />

    </>);
};

export default App;
