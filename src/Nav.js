import { NavLink } from "react-router-dom";
import React from "react";
import Portfolio from './pages/Portfolio';

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <NavLink className="nav-brand" to="/home">
          PORTFOLIO PROJ
        </NavLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <NavLink className="nav-link" to="/home" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className="nav-link"
                to="/portfolio"
                activeclassname="active"
              >
                Portfolio
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                className="nav-link"
                to="/ratatouille"
                activeclassname="active"
              >
                ratatouille
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
