import React, { useContext, useEffect } from "react";
import ProductContext, {
  RatingContext,
  SizeContext,
  ColorContext,
} from "../ContextAPI/Context";

import "./Filters.css";
const Filters = () => {
  const productData = useContext(ProductContext);
  const ratingData = useContext(RatingContext);
  const sizeData = useContext(SizeContext);
  const colorData = useContext(ColorContext);

  useEffect(() => {}, [ratingData.ratingValue]);
  const handleChange = (e) => {
    productData.setSortedValue(e.target.value);
  };
  const handleRating = (e) => {
    ratingData.setRatingValue(e.target.value);
  };
  const handleSizes = (e) => {
    sizeData.setSizeValue(e.target.value);
  };
  const handleColors = (e) => {
    colorData.setColorValue(e.target.value);
  };
  return (
    <div id="filters">
      <header className="heading">
        <h1>Sale on Clothing</h1>
      </header>
      <form className="filters">
        <h2>
          Filters <i className="fa fa-filter" style={{ fontSize: "24px" }}></i>{" "}
        </h2>{" "}
        <br />
        <div className="filter-options">
          <fieldset>
            <legend>
              <h3>Colours</h3>
            </legend>
            <label className="container-radio">
              Red
              <input
                type="radio"
                name="colors"
                value="red"
                checked={colorData.colorValue === "red" ? true : false}
                // onChange={() => setColors(!colors)}
                onClick={handleColors}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container-radio">
              White
              <input
                type="radio"
                name="colors"
                value="white"
                checked={colorData.colorValue === "white" ? true : false}
                onClick={handleColors}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container-radio">
              Black
              <input
                type="radio"
                name="colors"
                value="black"
                checked={colorData.colorValue === "black" ? true : false}
                onClick={handleColors}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container-radio">
              Blue
              <input
                type="radio"
                name="colors"
                value="blue"
                checked={colorData.colorValue === "blue" ? true : false}
                onClick={handleColors}
              />
              <span className="checkmark"></span>
            </label>
          </fieldset>
          <fieldset>
            <legend>
              <h3>Sizes</h3>
            </legend>
            {/* <label className="container">
              XS
              <input
                type="checkbox"
                checked={size}
                onChange={() => setSize(!size)}
              />
              <span className="checkmark"></span>
            </label> */}
            <label className="container-radio">
              S
              <input
                type="radio"
                value="s"
                name="radio1"
                checked={sizeData.sizeValue === "s" ? true : false}
                onClick={handleSizes}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container-radio">
              M
              <input
                type="radio"
                value="m"
                name="radio1"
                checked={sizeData.sizeValue === "m" ? true : false}
                onClick={handleSizes}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container-radio">
              L
              <input
                type="radio"
                value="l"
                name="radio1"
                checked={sizeData.sizeValue === "l" ? true : false}
                onClick={handleSizes}
              />
              <span className="checkmark"></span>
            </label>
            {/* <label className="container">
              XL
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label> */}
          </fieldset>
          <fieldset>
            <legend>
              <h3>Ratings (above)</h3>
            </legend>

            <label className="container-radio">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>

              <input
                type="radio"
                name="radio"
                value="4"
                checked={ratingData.ratingValue === "4" ? true : false}
                onChange={handleRating}
              />

              <span className="checkmark"></span>
            </label>
            <label className="container-radio">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <input
                type="radio"
                name="radio"
                value="3"
                checked={ratingData.ratingValue === "3" ? true : false}
                onChange={handleRating}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container-radio">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <input
                type="radio"
                name="radio"
                value="2"
                checked={ratingData.ratingValue === "2" ? true : false}
                onChange={handleRating}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container-radio">
              <i className="fa fa-star" aria-hidden="true"></i>
              <input
                type="radio"
                name="radio"
                value="1"
                checked={ratingData.ratingValue === "1" ? true : false}
                onChange={handleRating}
              />
              <span className="checkmark"></span>
            </label>
          </fieldset>
        </div>
        <fieldset>
          <legend>
            <h3>Sort By</h3>
          </legend>
          <select
            name="sort"
            value={productData.sortedValue}
            id="sort"
            onChange={handleChange}
          >
            <option value="1">Featured</option>
            <option value="2">Highest to Lowest</option>
            <option value="3">Lowest to Highest</option>
            <option value="4">Newest releases</option>
          </select>
        </fieldset>
      </form>
    </div>
  );
};

export default Filters;
