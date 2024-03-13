//import React from 'react'
import { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";
const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);
  const fetchTnfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((resp) => resp.json())
      .then((data) => {
        setAllproducts(data);
      });
  };
  useEffect(() => {
    fetchTnfo();
  }, []);
  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchTnfo();
  };
  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-formate-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
        {allproducts.map((product, index) => {
          return (
            <>
              <h1>
                <hr></hr>
              </h1>
              <div
                key={index}
                className="listproduct-formate-main listproduct-format"
              >
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                  src={cross_icon}
                  className="listproduct-remove-icon"
                  alt=""
                />
              </div>
            </>
          );
        })}
        <h1>
          <hr></hr>
        </h1>
      </div>
    </div>
  );
};

export default ListProduct;
