import React from "react";
import "./Home.css";
import Products from "../Products/Products";

export default function Home() {
  return (
    <div>
      <h1 className="Heading">Welcome to E-Commerce</h1>
      <h2 className="text">PRODUCTS</h2>
      <Products />
    </div>
  );
}
