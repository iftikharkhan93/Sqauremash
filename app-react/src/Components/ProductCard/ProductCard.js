import React from "react";

import "./ProductCard.css";
const ProductCard = ({ item }) => {
  return (
    <div id="product--card">
      <article className="product">
        <header>
          <img src={item.img} alt="Product Image" />
          <h3>{item.heading}</h3>
          <data value="39">
            <del>{item.originalPrice}</del> <ins>{item.discountPrice}</ins>
          </data>
          <p>{item.slogan}</p>
          <dl>
            <dd>
              {item.rating} <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star_half</span>
            </dd>
          </dl>
          <a href="#">see more</a>
        </header>
        <form>
          <fieldset className="product_info">
            <legend>Colours</legend>
            <label className="container-radio-prod">
              {" "}
              Red
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="container-radio-prod">
              {" "}
              White
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="container-radio-prod">
              {" "}
              Black
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="container-radio-prod">
              {" "}
              Blue
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </fieldset>
        </form>
        <form>
          <fieldset className="product_info">
            <legend>Sizes</legend>
            <label className="container-radio-prod">
              {item.small}
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="container-radio-prod">
              {item.medium}
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="container-radio-prod">
              {item.large}
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </fieldset>
        </form>
        <footer className="product_footer">
          <button style={{ fontSize: "15px" }}>
            <i className="fa fa-shopping-cart"></i>
          </button>
          <button style={{ fontSize: "15px" }}>
            <i className="fa fa-heart"></i>
          </button>
        </footer>
      </article>
    </div>
  );
};

export default ProductCard;
