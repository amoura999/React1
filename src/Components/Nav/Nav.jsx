import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-bg py-4 sticky-top">
        <div className="container">
          <Link className="navbar-brand text-white fs-2 fw-bold" to={""}>
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0 ">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-white fw-bold fs-6 ${isActive && "active-link" }`
                  }
                  to="about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-white fw-bold fs-6 ${isActive && "active-link"}`
                  }
                  to="portfolio"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-white fw-bold fs-6 ${isActive && "active-link"}`
                  }
                  to="contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
