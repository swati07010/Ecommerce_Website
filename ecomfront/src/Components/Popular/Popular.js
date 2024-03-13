import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
//import data_product from "../Assets/data";
const Popular = () => {
  const [popularproduct, setPopularProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())
      .then((data) => setPopularProduct(data));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr></hr>
      <div className="popular-item">
        {popularproduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
