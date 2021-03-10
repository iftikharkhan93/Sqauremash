import React from "react";
import ProductCard from "../ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const cardData = [
    {
      id: 1,
      img: "images/Prod-1.jpg",
      heading: "Men's Hoodie",
      originalPrice: "$50.00",
      discountPrice: "$39.00",
      slogan: "Tie-Dye Pullover Hoodie",
      rating: "4.4",
      seeMore: "see more",
      color: "Colours",
      red: "Red",
      white: "White",
      black: "Black",
      blue: "Blue",
      size: "Sizes",
      small: "S",
      medium: "M",
      large: "L",
    },
    {
      id: 2,
      img: "images/Prod-3.jpg",
      heading: "White Shoe",
      originalPrice: "$50.00",
      discountPrice: "$39.00",
      slogan: "Nike Air Force 1 '07",
      rating: "4.4",
      seeMore: "see more",
      color: "Colours",
      red: "Red",
      white: "White",
      black: "Black",
      blue: "Blue",
      size: "Sizes",
      small: "S",
      medium: "M",
      large: "L",
    },
    {
      id: 3,
      img: "images/Prod-5.jpg",
      heading: "Women's Bag",
      originalPrice: "$60.00",
      discountPrice: "$39.00",
      slogan: "Here is a shot of this product ...",
      rating: "4.4",
      seeMore: "see more",
      color: "Colours",
      red: "Red",
      white: "White",
      black: "Black",
      blue: "Blue",
      size: "Sizes",
      small: "S",
      medium: "M",
      large: "L",
    },
    {
      id: 4,
      img: "images/Prod-2.jpg",
      heading: "Men's Shoe",
      originalPrice: "$60.00",
      discountPrice: "$39.00",
      slogan: "Nike Blazer Mid '77 Vintage",
      rating: "4.4",
      seeMore: "see more",
      color: "Colours",
      red: "Red",
      white: "White",
      black: "Black",
      blue: "Blue",
      size: "Sizes",
      small: "8.9 in",
      medium: "9 in",
      large: "10 in",
    },
    {
      id: 5,
      img: "images/Prod-4.jpg",
      heading: "Women's Sportswear",
      originalPrice: "$40.00",
      discountPrice: "$39.00",
      slogan: "Here is a shot of this product..",
      rating: "4.4",
      seeMore: "see more",
      color: "Colours",
      red: "Red",
      white: "White",
      black: "Black",
      blue: "Blue",
      size: "Sizes",
      small: "S",
      medium: "M",
      large: "L",
    },
    {
      id: 6,
      img: "images/Prod-6.jpg",
      heading: "Backpack",
      originalPrice: "$50.00",
      discountPrice: "$39.00",
      slogan: "Here is a shot of this product ..",
      rating: "4.4",
      seeMore: "see more",
      color: "Colours",
      red: "Red",
      white: "White",
      black: "Black",
      blue: "Blue",
      size: "Sizes",
      small: "S",
      medium: "M",
      large: "L",
    },
  ];
  return (
    <div id="product-list">
      <h1 className="subheading">Results</h1>
      <section className="results">
        {cardData.map((item, index) => {
          return <ProductCard item={item} key={index} />;
        })}
      </section>

      <nav aria-label="Pagination" className="pagination">
        <p>1-6 of 23 products found</p>
        <ol className="pages">
          {[1, 2, 3, 4, 5].map((item) => (
            <li>
              <a href="#" aria-label="Current Page, Page 1" aria-current="true">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#" aria-label="Next Page">
              &raquo;
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default ProductList;
