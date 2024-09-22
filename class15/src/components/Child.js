import React from "react";

const Child = ({ count, setCOunt }) => {
  return (
    <div>
      From child component: {count}
      <button onClick={() => setCOunt(count + 1)}>Count</button>
    </div>
  );
};

export default Child;
