import React, { useState, useEffect } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
//import data_product from "../Assets/data";

const RelatedProducts = () => {
  const [popularproduct, setPopularProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())
      .then((data) => setPopularProduct(data));
  }, []);
  return (
    <div className="relationproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
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
export default RelatedProducts;
