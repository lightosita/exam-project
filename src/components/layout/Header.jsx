import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>
        <a href="/">
          Osita<small>Light.</small>
        </a>
      </h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="counter1">Counter1</NavLink>
          </li>
          <li>
            <NavLink to="counter2">Counter2</NavLink>
          </li>
          <li>
            <NavLink to="bomb">Bomb</NavLink>
          </li>

          <li>
            <NavLink to="*">404</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
