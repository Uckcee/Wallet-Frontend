import React, { Component } from "react";
import "../Home/Home.css";
import home from "../Images/home.png";

class Home extends Component {
  render() {
    return (
      <>
        <div className="nav--container">
          <nav className="navbar">
            <button className="nav--btn">Home</button>
            <button className="nav--btn">
              {" "}
              <a href="http://localhost:3000/login">Login</a>{" "}
            </button>
            <button className="nav--btn">
              {" "}
              <a href="http://localhost:3000/register">Create Account</a>
            </button>
          </nav>
        </div>

        <div className="main">
          <img src={home} alt="home" className="main--img" />
        </div>

        <div className="main--text">
          <p className="main--header">
            Empower Your
            <br />
            Financial future, <br />
            Master Your Bills
          </p>
          <p className="main--sub">
            Simplify, Pay, Thrive and Transform
            <br />
            the way you manage your finances <br />
            with DPey App
          </p>
          <button className="main--btn">
            <a href="http://localhost:3000/register">Get Started Now </a>
          </button>
        </div>
      </>
    );
  }
}

export default Home;
