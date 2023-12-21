import React, { Component } from "react";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


class AppRoute extends Component {
  render() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
  }
  
};

export default AppRoute;
