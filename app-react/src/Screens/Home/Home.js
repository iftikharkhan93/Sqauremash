import React from "react";
import Navbar from "../../Components/Navbar";
import Filters from "../../Components/Filters";
import ProductList from "../../Components/ProductList";
import Footer from "../../Components/Footer";
import Provider from "../../Components/ContextAPI/Provider";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Provider>
        <Navbar />
        <Filters />
        <ProductList />
        <Footer />
      </Provider>
    </div>
  );
};
export default Home;
