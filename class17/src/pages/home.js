import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";
import Another from "./another";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home Page
      <div>
        <button onClick={() => navigate("/contact")}>Contact Now</button>
      </div>
      <Another />
    </div>
  );
};

export default Home;
