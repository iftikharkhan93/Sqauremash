import React from "react";

import "./Filters.css";
const Filters = () => {
  const [colors, setColors] = React.useState(true);
  const [size, setSize] = React.useState(true);
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
            <label className="container">
              Red
              <input
                type="checkbox"
                name="colors"
                checked={colors}
                onChange={() => setColors(!colors)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              White
              <input type="checkbox" name="colors" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Black
              <input type="checkbox" name="colors" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              Blue
              <input type="checkbox" name="colors" />
              <span className="checkmark"></span>
            </label>
          </fieldset>

          <fieldset>
            <legend>
              <h3>Sizes</h3>
            </legend>
            <label className="container">
              XS
              <input
                type="checkbox"
                checked={size}
                onChange={() => setSize(!size)}
              />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              S
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              M
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              L
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container">
              XL
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
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

              <input type="radio" name="radio" />

              <span className="checkmark"></span>
            </label>
            <label className="container-radio">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="container-radio">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="container-radio">
              <i className="fa fa-star" aria-hidden="true"></i>
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </fieldset>
        </div>
        <fieldset>
          <legend>
            <h3>Sort By</h3>
          </legend>
          <select name="sort" id="sort">
            <option value="price-high">Featured</option>
            <option value="price-high">Highest to Lowest</option>
            <option value="price-low">Lowest to Highest</option>
            <option value="newest">Newest releases</option>
          </select>
        </fieldset>
      </form>
    </div>
  );
};

export default Filters;
