import React from "react";
import "./Navbar.css";
import Signup from "./Signup/Signup";



export default function Navbar () {
    return (

        <nav className="navbar">
        <div className="navbar-bg"></div>
        <div className="nav">
          <a href="" className="nav-logo">
            <div className="logo">
              <img src="https://assets.website-files.com/5e870779d9def4583b128a66/5e870779e18b0e2eaaa63ca6_logo-dark.svg" />
            </div>
          </a>
          <ul className="nav-links">
            <li className="nav-item">
              <div className="m-r-4">Products</div>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  fill="none"
                  xmlnsv="https://vecta.io/nano"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
                  <defs></defs>
                </svg>
              </div>
            </li>
            <li className="nav-item">
              <div className="m-r-4">Developers</div>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  fill="none"
                  xmlnsv="https://vecta.io/nano"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
                  <defs></defs>
                </svg>
              </div>
            </li>
            <li className="nav-item">
              <div className="m-r-4">Company</div>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  fill="none"
                  xmlnsv="https://vecta.io/nano"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
                  <defs></defs>
                </svg>
              </div>
            </li>
            <li className="nav-item">
              <div className="m-r-4">Solutions</div>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  fill="none"
                  xmlnsv="https://vecta.io/nano"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor"></path>
                  <defs></defs>
                </svg>
              </div>
            </li>
            <li className="nav-item">
              <a href="#">Customers</a>
            </li>
            <li className="nav-item">
              <a href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#">Blog</a>
            </li>
          </ul>
         <Signup/>
        </div>
      </nav>
);
}