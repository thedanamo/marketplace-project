import ReactDOM from "react-dom";
import "./main.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store.js";
import App from "./components/App.jsx";
import Item from "./components/Item.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import AddItem from "./components/AddItem.jsx";

let root = (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/item/:id" component={Item} />
      <Route exact={true} path="/signup" component={Signup} />
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/add-item" component={AddItem} />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(root, document.getElementById("root"));
