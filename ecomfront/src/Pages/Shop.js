import React from "react";
import Popular from "../Components/Popular/Popular";
import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Offers/Offers";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import NewCollections from "../Components/NewCollections/NewCollections";
function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}

export default Shop;
