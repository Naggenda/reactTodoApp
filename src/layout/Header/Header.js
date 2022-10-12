/*jshint esversion: 6 */
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
// import ToggleBtn from "../../components/Togglebtn";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  let activeStyle = {
    textDecoration: "underline"
  };

  // let activeClassName = "underline";
  return (
    <nav className="navbar">
      <div>
        <h1>
          <NavLink to="/" className="logo">TodoApp</NavLink>
        </h1>
      </div>
      <div className="toggle-btn">
      <button onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}>Toggle</button>
      </div>
      <div className={isNavExpanded ? "navbar-toggle expanded" : "navbar-toggle"}>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Todo"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Todo
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;