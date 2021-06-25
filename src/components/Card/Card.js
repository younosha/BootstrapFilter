import React from "react";

export const Card = ({ type, section, price, name, brand, previewImg }) => {
  return price === null || previewImg === "//planhome.online" ? null : (
    <div
      className="card"
      style={{ width: "18rem", marginTop: "1rem", padding: "5px 5px" }}
    >
      <img className="card-img-top" src={previewImg} alt="Card image cap" />
      <div
        className="card-body"
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <div className="card-text" style={{ marginBottom: "10px" }}>
          <h5 className="card-title">
            {type}: {name}
          </h5>
          {section ? `Section: ${section}` : null}
          {brand ? `Brand: ${brand}` : null}
          {price ? `Price: ${price}` : "Price: 0"}
        </div>
        <div
          href="#"
          className="btn btn-primary"
          style={{ justifyContent: "flex-end" }}
        >
          Go somewhere
        </div>
      </div>
    </div>
  );
};
