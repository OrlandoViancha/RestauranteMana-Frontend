import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Client/pages/index/index";
import Login from "../Client/pages/login/login";
import Registrer from "../Client/pages/registrer/registrer"
import Dashboard from "../Administrator/pages/products"
import Products from "../Administrator/pages/products/products"
const Ruta = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/home" exact element={<Home />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/registrer" exact element={<Registrer />}></Route>
        <Route path="/dashboard" exact element={<Dashboard />}></Route>
        <Route path="/dashboard/products" exact element={<Products />}></Route>
      </Routes>
    </Router>
  );
};
export default Ruta;
