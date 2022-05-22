import React from "react";
import { NavLink } from "react-router-dom";

import './menu.styles.css';


const Menu = () => {
  return (
    <nav className="menu-main">
        <NavLink activeClassName="selected" exact to="/">Home</NavLink>
        <NavLink activeClassName="selected" exact to="/about">About</NavLink>
        <NavLink activeClassName="selected" exact to="/best">Best</NavLink>
        <NavLink activeClassName="selected" exact to="/chile">Chile</NavLink>
        <NavLink activeClassName="selected" exact to="/me">Me</NavLink>
        {/* <NavLink activeClassName="selected" exact to="/error404">Error404</NavLink> */}
        {/* <NavLink activeClassName="selected" exact to="/">Home</NavLink> */}
    </nav>
  );
};

export default Menu;

