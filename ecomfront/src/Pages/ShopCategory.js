import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
// import all_product from "../Components/Assets/all_product";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-catwgory">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <spam>Showing 1-12</spam>out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmone">Explore More</div>
    </div>
  );
}

export default ShopCategory;
