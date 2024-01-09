import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Kalvium</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
