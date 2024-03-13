//import React from 'react'
import { useState } from "react";
import upload_area from "../../assets/upload_area.svg";
import "./AddProduct.css";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });
  const imageHendler = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHendler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const Addproduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);
    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("product Added") : alert("Failed");
        });
      console.log(product);
    }
  };
  return (
    <div className="add-product">
      <div className="add-product">
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input
            value={productDetails.name}
            onChange={changeHendler}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input
              type="text"
              value={productDetails.old_price}
              onChange={changeHendler}
              name="old_price"
              placeholder="Type here"
            />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer</p>
            <input
              type="text"
              value={productDetails.new_price}
              onChange={changeHendler}
              name="new_price"
              placeholder="Type here"
            />
          </div>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHendler}
          name="category"
          className="add-product-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumnail-image"
            alt=""
          />
        </label>
        <input
          onChange={imageHendler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        className="addproduct-btn"
        onClick={() => {
          Addproduct();
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
