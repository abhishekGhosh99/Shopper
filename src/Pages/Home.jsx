import React from "react";
import Hero from "../Components/Hero";
import Popular from "../Components/Popular";
import Offers from "../Components/Offers";
import NewCollections from "../Components/NewCollections";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  );
};

export default Home;
