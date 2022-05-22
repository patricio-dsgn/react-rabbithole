import React from "react";
import "./button.styles.css";

const Btn = (props) => {
  return <a className={props.size} href="#">{props.txt}</a>;
};

export default Btn;
