import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Another = () => {
  const { theme } = useContext(ThemeContext);

  return <div>AnotherCOmponent ({theme})</div>;
};

export default Another;
