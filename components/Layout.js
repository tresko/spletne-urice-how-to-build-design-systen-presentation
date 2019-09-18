import React from "react";

export default ({ children, color }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      backgroundColor: color
    }}
  >
    {children}
  </div>
);
