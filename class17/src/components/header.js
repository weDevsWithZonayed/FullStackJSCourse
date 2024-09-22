import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Mode ({theme})
      </button>
    </header>
  );
};

export default Header;
