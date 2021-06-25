import React from "react";

export const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        class="spinner-border text-primary"
        role="status"
        style={{ width: "10rem", height: "10rem" }}
      ></div>
    </div>
  );
};
