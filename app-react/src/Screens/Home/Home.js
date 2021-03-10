import React from "react";
import Navbar from "../../Components/Navbar";
import Filters from "../../Components/Filters";
import ProductList from "../../Components/ProductList";
import Footer from "../../Components/Footer";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Filters />
      <ProductList />
      <Footer />
    </div>
  );
};
export default Home;
