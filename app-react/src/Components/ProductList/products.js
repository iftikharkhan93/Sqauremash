import React from "react";
import ProductCard from "../ProductCard";
const Products = (props) => {
  return (
    <>
      <section className="results">
        {props.currentProducts?.map((item, index) => {
          return <ProductCard item={item} key={index} />;
        })}
      </section>
    </>
  );
};

export default Products;
