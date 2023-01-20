import React from "react";
import "./Products.css";
import image1 from "../../images/laptop1.jfif";
import image2 from "../../images/laptop2.jfif";
import image3 from "../../images/laptop3.jfif";
import image4 from "../../images/laptop4.jfif";

export default function Products() {
  return (
    <div>
      <div className="box">
        <div className="small-box">
          <img className="image" src={image1} alt="image" />
          <h3>Laptop</h3>
          <h3>Price 80,000</h3>
        </div>
        <div className="small-box">
          <img className="image" src={image2} alt="image" />
          <h3>Laptop</h3>
          <h3>Price 80,000</h3>
        </div>
        <div className="small-box">
          <img className="image" src={image3} alt="image" />
          <h3>Laptop</h3>
          <h3>Price 80,000</h3>
        </div>
        <div className="small-box">
          <img className="image" src={image4} alt="image" />
          <h3>Laptop</h3>
          <h3>Price 80,000</h3>
        </div>
      </div>

      <div className="box">
        <div className="small-box">
          <img className="image" src={image1} alt="image" />
          <h3>Laptop</h3>
          <h3>Price 80,000</h3>
        </div>
        <div className="small-box">
          <img className="image" src={image2} alt="image" />
          <h3>Laptop</h3>
          <h3>Price 80,000</h3>
        </div>
        <div className="small-box">
          <img className="image" src={image3} alt="image" />
          <h3>Laptop</h3>
          <h3>Price 80,000</h3>
        </div>
        <div className="small-box">
          <img className="image" src={image4} alt="image" />
          <h3>Laptop</h3>
          <h3>Price 80,000</h3>
        </div>
      </div>
    </div>
  );
}
