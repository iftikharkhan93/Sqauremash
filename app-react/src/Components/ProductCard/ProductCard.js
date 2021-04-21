import React, { useState, useContext } from "react";
import { CartContext } from "../ContextAPI/Context";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  const [cartButton, setCartButton] = useState(true);
  const cartData = useContext(CartContext);

  const handleCount = () => {
    setCartButton(!cartButton);
    cartData.setCartValue(cartData.cartValue + 1);
  };
  const handleDelete = () => {
    setCartButton(!cartButton);
    cartData.setCartValue(cartData.cartValue - 1);
  };

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
              {item.rating} <span className="material-icons">{item.star1}</span>
              <span className="material-icons">{item.star2}</span>
              <span className="material-icons">{item.star3}</span>
              <span className="material-icons">{item.star4}</span>
              <span className="material-icons">{item.star5}</span>
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
              S
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="container-radio-prod">
              M
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="container-radio-prod">
              L
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </fieldset>
        </form>
        <footer className="product_footer">
          <button
            style={{
              fontSize: "15px",
              display: cartButton ? "inline" : "none",
            }}
            onClick={handleCount}
          >
            <i className="fa fa-shopping-cart"></i>
          </button>
          <button
            style={{
              fontSize: "15px",
              display: cartButton ? "none" : "inline",
              backgroundColor: "red",
            }}
            onClick={handleDelete}
            className="d-none"
          >
            <i class="fas fa-trash" style={{ color: "white" }}></i>
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
