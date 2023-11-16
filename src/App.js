//import logo from './logo.svg';
//import './App.css';
import Home from "./Home/Home";
import Header from "./Header/Header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./Products/Categories";
import Products from "./Products/Products";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/categories" exact Component={Categories} />
          <Route path="/categories/:categoryId" Component={Products} />
        </Routes>
      </Router>
    </>
  );
}
