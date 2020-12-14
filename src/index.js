import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GroceryList from "./GroceryList";
  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <GroceryList/>
    </div>,
    destination
);